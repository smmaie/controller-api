window.addEventListener("gamepadconnected", event => {
  console.log("Gamepad connected ");
  console.log(event.gamepad);
});

window.addEventListener("gamepaddisconnected", event => {
  console.log("Gamepad disconnected ");
  console.log(event.gamepad);
});


const gamepadDisplay = document.getElementById('gamepad-display')

console.log("yo")



function update (){
const gamepads = navigator.getGamepads();
if (gamepads[0]) {
  const gamepadState = {
    id: gamepads[0].id,
    axes: [
      gamepads[0].axes[0].toFixed(2),
      gamepads[0].axes[1].toFixed(2),
      gamepads[0].axes[2].toFixed(2),
      gamepads[0].axes[3].toFixed(2),
    ],
    buttons: [
      { cross: gamepads[0].buttons[0].pressed },
      { button_1: gamepads[0].buttons[1].pressed },
      { square: gamepads[0].buttons[2].pressed },
      { triangle: gamepads[0].buttons[3].pressed },
      { button_4: gamepads[0].buttons[4].pressed },
      { button_5: gamepads[0].buttons[5].pressed },
      { button_6: gamepads[0].buttons[6].pressed },
      { button_7: gamepads[0].buttons[7].pressed },
      { button_8: gamepads[0].buttons[8].pressed },
      { button_9: gamepads[0].buttons[9].pressed },
      { button_10: gamepads[0].buttons[10].pressed },
      { button_11: gamepads[0].buttons[11].pressed },
      { up: gamepads[0].buttons[12].pressed },
      { down: gamepads[0].buttons[13].pressed },
      { left: gamepads[0].buttons[14].pressed },
      { right: gamepads[0].buttons[15].pressed },
    ]
  }
  gamepadDisplay.textContent  = JSON.stringify(gamepadState, null, 2); 
}
window.requestAnimationFrame(update)
}

window.requestAnimationFrame(update)

