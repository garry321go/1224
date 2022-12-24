const holes = document.querySelectorAll('.hole');
  const scoreBoard = document.querySelector('.score');
  const moles = document.querySelectorAll('.mole');
  let lastHole;
  let timeUp = false;
  let score = 0;

  function randomTime(min, max) { 
    return Math.round(Math.random() * (max - min) + min);
  }

  function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === lastHole) {
      return randomHole(holes);
    }
    lastHole = hole;
    return hole;
  }

  function peep() {
    const time = randomTime(500, 1000);
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
      hole.classList.remove('up');
      if (!timeUp) peep();
    }, time);
  }

  function startGame() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    peep();
    setTimeout(() => timeUp = true, 30000)
  }

  function whack(e) {
    if(!e.isTrusted) return; 
    score++;
    this.parentNode.classList.remove('up');
    scoreBoard.textContent = score;
  }

  moles.forEach(mole => mole.addEventListener('click', whack));
function startTime(){
  // 起始時間(計時器的啟動時間)。

const startTime = new Date().getTime();

// 目標時間(要倒數幾秒)。
const targetSeconds = 30;

// timer.
var timer = function (startTime) {
  // 當前時間。
  var currentTime = new Date().getTime();
  
  // 當前時間 - 起始時間 = 經過時間。(因為不需要毫秒，所以將結果除以1000。)
  var diffSec = Math.round((currentTime - startTime) / 1000);
  
  // 目標時間 - 經過時間 = 剩餘時間。
  var remainingTime = targetSeconds - diffSec;
  
  // update progess.  
  update(remainingTime);   
  
  if (remainingTime == 0) {
    // stop the timer.
    clearInterval(timerId);
    
    // do anything you want to.
    $(".msg").text("time up!");
  } 
}

// start the timer.
var timerId = setInterval( function () { timer(startTime); }, 1000);

// update progess with the timer.
function update (seconds) {
  barRenderer(seconds);
  textRenderer(seconds);
}

// refresh the bar.
function barRenderer (seconds) {
  var percent = (seconds / targetSeconds) * 100;
  $(".bar").css("width", percent + "%");
}

// refresh the text of the bar.
function textRenderer (seconds) {
  var sec = seconds % 60;  
  var min = Math.floor(seconds / 60); 

  /* 兩種作法都可以 */
  //min = min > 9 ? min : "0" + min;
  //sec = sec > 9 ? sec : "0" + sec;  
  min = min.toString().padStart(2, '0');
  sec = sec.toString().padStart(2, '0');
  
  $(".text").text(min + ":" + sec);   
}
}
function setstyle()
{document.getElementById("B1").style.display="none"}
var timeoutSet
function showstyletime()
{timeoutSet =setTimeout(showstyle, 30000)};
function showstyle()
{document.getElementById("B1").style.display="inline"}
