let keyEL = document.querySelector("#key");
let codeEL = document.querySelector("#code");

function keydownAction(event) {
  // TODO: Complete keydown function

  let key = event.key;
  let code = event.keyCode;

  keyEL.textContent = key;
  codeEL.textContent = code;

  document.querySelector("#status").textContent = "KEYDOWN Event";
}

function keyupAction(event) {
  document.querySelector("#status").textContent = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event
document.addEventListener("keydown", keydownAction);



