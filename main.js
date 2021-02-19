const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height=400;

let spaceprsd = false;
let angle = 0;
let hue = 0;
let frame = 0;
let score = 0;
let gamespeed = 2;



function animate (){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    // ctx.fillRect(10,10,50,50);
    bird.draw();
    bird.update();
    ctx.fillStyle = 'black';
    ctx.font = '80px Georgia';
    ctx.strokeText(score,450,70);
    ctx.fillText(score,450,70);
    handleParticle();
    HandleObstacle();
    Handlecollisions();
    if (Handlecollisions()){
        bool = true;
        return ;
    }
    requestAnimationFrame(animate);
    angle +=0.12;
    hue++;
    frame++;
   
}
animate();


window.addEventListener('keydown', function(e) {
    if (e.code === 'Space'){
        spaceprsd = true;
        aud('flap');
        
    }
    
});
window.addEventListener('keyup', function(e) {
    if (e.code === 'Space'){
        spaceprsd = false;
        aud('flap');
       
    }
    
});

window.addEventListener('touchstart', function(e) {
        spaceprsd = true;
        aud('flap');
        
    
    
});
window.addEventListener('touchend', function(e) {
        e.preventDefault();
        spaceprsd = false;
        aud('flap');
        return false;
       
       
    
    
});


const bang = new Image();
bang.src = 'bang.png';
var bool = false;
function Handlecollisions(){
    for (let i=0;i<obstacleArray.length;i++){
        if (bird.x < obstacleArray[i].x + obstacleArray[i].width &&
            bird.x + bird.width > obstacleArray[i].x && 
        ((bird.y < 0 + obstacleArray[i].top && bird.y + bird.height >0) || 
        (bird.y>canvas.height - obstacleArray[i].bottom && bird.y+ bird.height<canvas.height))){
            ctx.drawImage(bang,bird.x,bird.y,50,50);
            ctx.font = "25px Georgia";
            ctx.fillStyle = 'black';
            aud('hit');
            ctx.fillText ('Game Over '+ score,canvas.width/2-60,canvas.height/2 -10);
            bool = true;
            return bool;

            }

    }
}
function aud(e){
    var aud_flap = new Audio('flap.mp3');
    var aud_hit = new Audio('hit.wav');
    var aud_score = new Audio('point.wav');

    if (!bool){
        if (e === 'flap' ){
        
            aud_flap.play();
            aud_flap.loop = false;
            
        }
        if (e === 'hit' ){
            aud_hit.loop = false;
            aud_hit.play();
        }
        if (e === 'score'){
            aud_score.loop = false;
            aud_score.play();
        }

    }
    

    
    
}
