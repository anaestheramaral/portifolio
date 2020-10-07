var timer = document.getElementById('timer') //box with btns and times
console.log(timer);
timer.style.width = "40%";
timer.style.height="20vw";
// timer.style.border = "solid 1px #000000";
timer.style.margin = "0 auto";
timer.style.backgroundColor="rgba(184, 184, 184, 0.514)";
timer.style.borderRadius = "2em"



var boxBtn = document.createElement("div"); // box with btns inside the big box -> just to align
boxBtn.style.margin = "0 auto";
boxBtn.style.width="80%";
timer.appendChild(boxBtn);
console.log(boxBtn);

var btnsTimer = document.createElement("form");//form
boxBtn.appendChild(btnsTimer);

function btnT(text, type){
    var btn = document.createElement("button");
    btnsTimer.appendChild(btn);
    btn.innerHTML = text;
    btn.style.textAlign="center";
    btn.style.width="30%";
    btn.style.border="none";
    btn.style.borderRadius="5px";
    btn.style.padding = "1% 0"
        if(type!="last"){
            btn.style.margin="5% 5% 0 0";
        }else{
            false
        }    
}

//superior buttons inside the box
const pomodoro = btnT("Pomodoro", );
const shortB = btnT("Short Break", );
const longB = btnT("Long Break", "last");

var countDown = document.createElement("div"); // container for counter
timer.appendChild(countDown);
countDown.style.height="40%";
countDown.style.border="solid 1px";
countDown.style.margin="5% auto";
countDown.style.width="70%";
console.log(countDown)

var start = document.createElement("form");//start form
timer.appendChild(start);
console.log(start)

var startBtn = document.createElement("button");//start button
start.appendChild(startBtn);
startBtn.innerHTML = "START";
startBtn.style.textAlign="center";
startBtn.style.margin = "0 auto";
startBtn.style.display="block";
startBtn.style.fontSize = "1.5vw";
startBtn.style.padding = "2% 10%";
startBtn.style.letterSpacing=".2em"
startBtn.style.border="none";
startBtn.style.borderRadius="5px";
