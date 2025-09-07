var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  // document.querySelector("button")[i].addEventListener("click", function () {
  //   alert("I got clicked");
  // });

  // var audio = new Audio("./sounds/tom-1.mp3");
  //   audio.play();

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
      var buttonInnerHTML = this.innerHTML;

      switch(buttonInnerHTML) {
        case "w":
          var audio = new Audio("./sounds/tom-1.mp3");
          audio.play();
          break;

        case "a":
          var audio = new Audio("./sounds/tom-2.mp3");
          audio.play();
          break;  
        
        case "s":
          var audio = new Audio("./sounds/tom-3.mp3");
          audio.play();
          break;  

        case "d":
          var audio = new Audio("./sounds/tom-2.mp3");
          audio.play();
          break;
         
        case "j":
          var audio = new Audio("./sounds/tom-2.mp3");
          audio.play();
          break;
          
        case "k":
          var audio = new Audio("./sounds/tom-2.mp3");
          audio.play();
          break;  

        case "i":
          var audio = new Audio("./sounds/tom-2.mp3");
          audio.play();
          break;  

        default: console.log(buttonInnerHTML);
          
      }
  });

  function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100)
  }
}
