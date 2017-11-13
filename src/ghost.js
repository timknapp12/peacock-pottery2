var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    65: 'a',
    66: 'b'
  };
  
  var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
  var konamiCodePosition = 0;
  
  document.addEventListener('keydown', function(e) {
    var key = allowedKeys[e.keyCode];
    var requiredKey = konamiCode[konamiCodePosition];
  console.log('type key', key);
    if (key == requiredKey) {
      konamiCodePosition++;
      if (konamiCodePosition == konamiCode.length)
        activateCheats();
    } else
      konamiCodePosition = 0;
  });
  
  function activateCheats() {
    //document.body.style.backgroundImage = "url('assets/img/bg/rick.gif')";
    document.body.style.backgroundColor ='red';
    console.log('hey man')
    // document.getElementById('rick').src="assets/img/bg/rick.gif";
    // var audio = new Audio('assets/img/bg/rick.mp3');
    // audio.play();
  }