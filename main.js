
var carElement = document.querySelector('#f1-img');
var currentAngle = ['ArrowUp', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

var moveCar = document.addEventListener('keydown', function(event){
  for(var i = 0; i < currentAngle.length; i++){
    carElement.className = ' ';
    carElement.classList.add(event.key);
    }
});
