window.addEventListener("gamepadconnected", event => {
    console.log("Gamepad connected ");
    console.log(event.gamepad);
  });

  window.addEventListener("gamepaddisconnected", event => {
    console.log("Gamepad disconnected ");
    console.log(event.gamepad);
  });   

<<<<<<< HEAD
  console.log("yo")

  buttons: [
    'DPad-Left','DPad-Right'
  ];
=======
function update (){
  const gamepads = navigator.getGamepads();
  console.log(gamepads)
  window.requestAnimationFrame(update)
}

  window.requestAnimationFrame(update)
  
>>>>>>> 704ff9a0dbf473a0fe85cd383d8bc219b0be3f9f
