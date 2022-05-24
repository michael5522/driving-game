
var carElement = document.querySelector('#f1-img');

var vehicle = {
  currentAngle: ['ArrowUp', 'ArrowLeft', 'ArrowDown', 'ArrowRight'],
  position: 'ArrowRight',
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
  carElement.className = '';
  carElement.classList.add(event.key);
  if (event.key ==='ArrowUp'){
    vehicle.position = 'ArrowUp';
  }
  if (event.key === 'ArrowLeft') {
    vehicle.position = 'ArrowLeft';
  }
  if (event.key === 'ArrowDown') {
    vehicle.position = 'ArrowDown';
  }
  if (event.key === 'ArrowRight') {
    vehicle.position = 'ArrowRight';
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
  if(vehicle.position === 'ArrowRight'){
    vehicle.location.y += 5;
    carElement.style.left = vehicle.location.y + 'px';
  }
  if (vehicle.position === 'ArrowLeft') {
    vehicle.location.y -= 5;
    carElement.style.left = vehicle.location.y + 'px';
  }
  if (vehicle.position === 'ArrowDown') {
    vehicle.location.x += 5;
    carElement.style.top = vehicle.location.x + 'px';
  }
  if (vehicle.position === 'ArrowUp') {
    vehicle.location.x -= 5;
    carElement.style.top = vehicle.location.x + 'px';
  }
}
