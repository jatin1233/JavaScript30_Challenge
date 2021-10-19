window.addEventListener("keydown", function (e) {
  let audioSelected = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audioSelected) return;
  audioSelected.currentTime = 0;
  audioSelected.play();

  let keyElement = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  keyElement.classList.add("playing");
});

window.addEventListener("keyup", function (e) {
  let keyElement = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  keyElement.classList.remove("playing");
});
