
const canvas3 = document.getElementById("canvas3")
const ctx3 = canvas3.getContext("2d")
const CANVAS_WIDTH3 = canvas3.width = 500
const CANVAS_HEIGHT3 = canvas3.height = 1000

const enemyArray3 = []


class Enemy3{
    constructor(){
        this.image = new Image()
        this.image.src = "enemy3.png"
        this.spriteWidth = 218
        this.spriteHeight = 177
       
        this.width = this.spriteWidth / 2.5
        this.height = this.spriteHeight / 2.5
        this.x = Math.random() * (CANVAS_WIDTH3 - this.width)
        this.y = Math.random() * (CANVAS_HEIGHT3 - this.height)
        this.speed = Math.random() * 3 + 1
        this.flapSpeed = Math.floor(this.speed)
        this.frame = 0
        this.speed = Math.random() * 4 + 1
        this.angle = Math.random() * 100
        //this.curve = Math.random() * 7
        this.angleSpeed = Math.random() * 0.5 + 0.5
    }
    update(){
        this.x =  canvas3.width/2 */*is the amplitude of wave from fixed x*/  Math.sin(this.angle * Math.PI/90) /*is the angle verticle change*/  + (canvas3.width/2 - this.width/2) //takes the fixed x in the middle of the canvas
        this.y = canvas3.height/2 * Math.cos(this.angle * Math.PI/180) + (canvas3.height/2 - this.width/2)
        
        this.angle += this.angleSpeed
        
        if(this.x + this.spriteWidth < 0){ 
            this.x = CANVAS_WIDTH
            //this.y = Math.random() * (CANVAS_HEIGHT - this.height)
        }
        if(gameFrame % this.flapSpeed === 0){
            this.frame > 4 ? this.frame = 0 : this.frame++
        }
    }
    draw(){
        ctx3.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)
    }
}

for (let i = 0; i < numberOfEnemies; i++){
    enemyArray3.push(new Enemy3())
}



