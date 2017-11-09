-- insert into cart (products)
-- values ($1, $2);

insert into cart (products, user_id)
values ($1, $2);
