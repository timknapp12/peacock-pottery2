require("dotenv").config();
const express = require("express"),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  port = 3030,
  session = require("express-session"),
  passport = require("passport"),
  Auth0Strategy = require("passport-auth0"),
  massive = require("massive"),
  products_controller = require('./controllers/products_controller'),
  cart_controller = require('./controllers/cart_controller');
  const stripe = require('stripe')(process.env.secret_key);

const app = express();

app.use( express.static( `${__dirname}/../build` ) );
app.use(bodyParser.json());
app.use(cors());
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
  })
);

app.use(passport.initialize());
app.use(passport.session());

massive(process.env.CONNECTION_STRING).then(db => {
  app.set("db", db);
});

passport.use(
  new Auth0Strategy(
    {
      domain: process.env.AUTH_DOMAIN,
      clientID: process.env.AUTH_CLIENTID,
      clientSecret: process.env.AUTH_CLIENTSECRET,
      callbackURL: process.env.AUTH_CALLBACK
    },
    function(accessToken, refreshToken, extraParams, profile, done) {
      //check if user exists in the user table
      //if they do, invoke done with users id
      //if not, then we will create new user
      //then invoke done with new users id
      const db = app.get("db");
      const userData = profile._json;
      db.find_user([userData.identities[0].user_id]).then(user => {
        if (user[0]) {
          return done(null, user[0].user_id);
        } else {
          db.create_user([
              userData.name,
              userData.email,
              userData.picture,
              userData.identities[0].user_id
            ])
            .then(user => {
              console.log(user)
                return done(null, user[0].user_id);
            });
        }
      });
    }
  )
);
passport.serializeUser(function(id, done) {
  // console.log('serialize')
  done(null, id);
});
passport.deserializeUser(function(id, done) {
  // console.log('deserialize')
    app.get('db').find_session_user([id]).then(user => {
        done(null, user[0]);
    })
});

app.get("/auth", passport.authenticate("auth0"));
app.get(
  "/auth/callback",
  passport.authenticate("auth0", {
    successRedirect: "http://timpeacockpottery.com/#/home",
    failureRedirect: "/auth"
  })
);

app.get('/auth/me', (req, res)=> {
    if (req.user) {
        return res.status(200).send(req.user);
    } else {
        return res.status(401).send('Need to sign in.');
    }
})

app.get('/auth/logout', (req, res) => {
  req.logOut();
  res.redirect('timpeacockpottery.com');
})


// get all products
app.get('/api/products', products_controller.read);
//find_cart/create_cart
// app.get('/api/cart/check', cart_controller.create)
//show all items in cart
app.get('/api/cart', cart_controller.read);
//add to cart
app.put('/api/cart/:id', cart_controller.update);
//remove from cart
app.delete('/api/cart/:id', cart_controller.delete);


app.post('/api/payment', function(req, res, next){
  //convert amount to pennies
  const amountArray = req.body.amount.toString().split('');
  const pennies = [];
  for (var i = 0; i < amountArray.length; i++) {
    if(amountArray[i] === ".") {
      if (typeof amountArray[i + 1] === "string") {
        pennies.push(amountArray[i + 1]);
      } else {
        pennies.push("0");
      }
      if (typeof amountArray[i + 2] === "string") {
        pennies.push(amountArray[i + 2]);
      } else {
        pennies.push("0");
      }
    	break;
    } else {
    	pennies.push(amountArray[i])
    }
  }
  const convertedAmt = parseInt(pennies.join(''));

  const charge = stripe.charges.create({
  amount: convertedAmt, // amount in cents, again
  currency: 'usd',
  source: req.body.token.id,
  description: 'Test charge from react app'
}, function(err, charge) {
    if (err) return res.sendStatus(500)
    return res.sendStatus(200);
  // if (err && err.type === 'StripeCardError') {
  //   // The card has been declined
  // }
});
});


app.listen(port, () => console.log(`listening on port ${port}`));


