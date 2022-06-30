"use strict";
window.addEventListener("keydown", function (e) {
  let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  let keys = document.querySelector(`.keys[data-key="${e.keyCode}"]`);
  //console.log(audio);
  //sconsole.log(e.keyCode);
  //console.log(keys);
  if (!audio) return; //it stops the function to run
  audio.currentTime = 0;
  audio.play();
  keys.classList.toggle("playing");
  // i was stuck keys.classList.remove("playing") due to a small dot haha;
});
