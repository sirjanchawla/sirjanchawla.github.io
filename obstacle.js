const obstacleArray = [];

class Obstacle{
    constructor(){
        this.top = (Math.random()* canvas.height/2);
        this.bottom = (Math.random()* canvas.height/2);
        this.x = canvas.width;
        this.width = 20;
        this.color = 'hsl('+ hue +',100%,50%,0.8)';
        this.counted = false;
    }
    draw(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x,0,this.width, this.top);
        ctx.fillRect(this.x,canvas.height-this.bottom, this.width, this.bottom);
    }
    update(){
       
        this.x -= gamespeed;
        if (!this.counted && this.x<bird.x){
            score++;
            this.counted = true;
            aud('score');
        }
        this.draw();

    }
}
function increase(){
    gamespeed *= 1.05;
}
function HandleObstacle(){
    if(frame%80 ===0){
        increase();
        obstacleArray.unshift(new Obstacle);
    }
    for (i=0; i<obstacleArray.length; i++){
        obstacleArray[i].update();
        
    }
    if(obstacleArray.length>200){
        for (let i=0;i<20;i++){x
            obstacleArray.pop(obstacleArray[0]);
        }
    }
    
}