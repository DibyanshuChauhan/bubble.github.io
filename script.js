var clutter = "";
var timer = 60;
var score = 0;
var hitrn = 0;

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
   document.querySelector("#htval").textContent = hitrn;
}

function makeBubble() {
for(var i= 1; i<=119; i++) {
    var hitrn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${hitrn}</div>`;
}

document.querySelector("#pbtm").innerHTML =clutter;
};

function runTimer(){
   var timerInt = setInterval(function(){
        if(timer>0){
            timer--;
        document.querySelector("#timerval").textContent = timer;    
        }
        else{
            clearInterval(timerInt);
            document.querySelector("#pbtm").innerHTML = "<h1> GAME OVER </h1>";
        }
        
    },1000);
};

function increaseScore(){
    score +=10;
    document.querySelector("#scoreval").textContent = score;
}


document.querySelector("#pbtm").addEventListener("click", function(dets) {
    var clickednum = Number(dets.target.textContent);
    if(clickednum === hitrn) {
        increaseScore();
        makeBubble();
        getNewHit();
    }
})

getNewHit();
runTimer();
makeBubble();