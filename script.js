'use strict';
let randomvalue = Math.round(Math.random(1) * 20)
let score  = 20
let highScore = 0
document.querySelector(".check").addEventListener("click",run)
document.querySelector(".again").addEventListener("click",reset)
function run(){   
    let input = Number(document.querySelector(".guess").value)
    
    if (input === randomvalue) {
        document.querySelector(".message").textContent = "You're correct "
        document.querySelector(".number").textContent = randomvalue
        if (score >highScore) {
            highScore =score
            document.querySelector(".highscore").textContent = highScore
        }
        document.querySelector("body").style.backgroundColor = "#60b347"
        document.querySelector(".number").style.width = "30rem"
    
    } else if (!input) {
        document.querySelector(".message").textContent = "Please Enter a Number"
    }else if (input > 20 || input < 0 ) {
        document.querySelector(".message").textContent = "Enter Value Between 1 & 20"
    }else if (input < randomvalue){
        if (score > 0) {
            document.querySelector(".message").textContent = "Too Low"
            score--
            document.querySelector(".score").textContent = score
            
        }else {
            document.querySelector(".message").textContent = "You lost the Game"
            document.querySelector("body").style.backgroundColor = "#bb371a"
        }
    } else if (input > randomvalue) {
      if (score > 0) {
          document.querySelector(".message").textContent = "Too High"
          score--
          document.querySelector(".score").textContent = score
          
          
      }else{
          document.querySelector(".message").textContent = "You lost the Game"
          document.querySelector("body").style.backgroundColor = "#bb371a"
      }

    }
}

function reset() {
    
    randomvalue = Math.round(Math.random(1) * 20)
    score = 20
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".score").textContent = 20;
    document.querySelector(".guess").value = ""
    document.querySelector(".number").textContent = '?'
    document.querySelector("body").style.backgroundColor = "#222"
   
}