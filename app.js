window.addEventListener("gamepadconnected", event => {
    console.log("Gamepad connected ");
    console.log(event.gamepad);
  });

  window.addEventListener("gamepaddisconnected", event => {
    console.log("Gamepad disconnected ");
    console.log(event.gamepad);
  });   

  console.log("yo")
  