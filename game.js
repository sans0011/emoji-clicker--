let score=0;
let timeleft = 30;
let timerRunning = false;
function ClickEmogi() {if (!timmerRunning) return;
                       score++;
                       document.detElementById("score").textContent = score;}
funtion startTimer() {timerRuninng = true;
                     const countdown=setInterval(() =>{
                       timeleft--;
                       document.getElementById("time").textContent=timeleft;
                       if (timeleft <= 0) {
                         clearinterval(countdown);
                         timerRuninng= false;
                         alert("Game Over! Your score: " + score);
                     } 
                     },1000);
                     }
setTimeout(startTimer, 1000);
