var timer = 60;
var score = 0;
var rin = "";




function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent=score;
}



function getnewHit(){
    rin=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = rin; 

}


function makebubble(){
    var clutter = "";

for(var i=1;i<=44;i++){
   var rn = Math.floor(Math.random()*10)
   clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML=clutter;

}

function runTimer(){
    var timerInt = setInterval(function(){
        if(timer > 0){
        timer--;
        document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerInt);
            document.querySelector("#pbtm").innerHTML=`<h1>Game Over!</h1>`;


        }

    },1000);

}

document.querySelector("#pbtm").addEventListener("click",
function(dets){
    var clickedNum = (Number(dets.target.textContent));
    if(clickedNum===rin){
        increaseScore();
        makebubble();
        getnewHit();
    }


});
getnewHit();
runTimer();
makebubble();




