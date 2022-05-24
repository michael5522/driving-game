
var carElement = document.querySelector('#f1-img');

var vehicle = {
  currentAngle: ['ArrowUp', 'ArrowLeft', 'ArrowDown', 'ArrowRight'],
  location: {
    x: null,
    y: null
  },
  onOff: false
}

var carPositionListen = document.addEventListener('keydown', function(event){
  if(event.code === 'Space'){
    return;
  }
  for(var i = 0; i < vehicle.currentAngle.length; i++){
    carElement.className = '';
    carElement.classList.add(event.key);
    }
});

var rect = carElement.getBoundingClientRect();
vehicle.location.x =  rect.x;
vehicle.location.y = rect.y;

var intervalId = null;
var spaceButtonListen = document.addEventListener('keydown', function(event){
  if(event.code === 'Space'){

    vehicle.onOff = !vehicle.onOff
    if (!vehicle.onOff) {
      clearInterval(intervalId)
    }
    if(vehicle.onOff){
      intervalId = setInterval(moveCar, 16);
    }
  }
});


function moveCar(){
    vehicle.location.y += 5;
    carElement.style.left = vehicle.location.y + 'px';
}
