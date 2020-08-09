for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

// Detecting Button Press

function handleClick() {
  var buttonInnerHTML = this.innerHTML;
  soundPress(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
}

// Detecting Key-board Press

document.addEventListener("keypress", function (event) {
  soundPress(event.key);
  buttonAnimation(event.key);
});

function soundPress(key) {
  switch (key) {
    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var kick = new Audio("sounds/tom-1.mp3");
      kick.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
}

function buttonAnimation(currentkey) {
  var activeButton = document.querySelector("." + currentkey);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);

  //   setTimeout(() => {
  //     activeButton.classList.remove("pressed");
  //   }, 100);
}
