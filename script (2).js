
const canvas2 = document.getElementById("canvas2")
const ctx2 = canvas2.getContext("2d")
const CANVAS_WIDTH2 = canvas2.width = 500
const CANVAS_HEIGHT2 = canvas2.height = 1000

const enemyArray2 = []


class Enemy2{
    constructor(){
        this.image = new Image()
        this.image.src = "enemy2.png"
        this.spriteWidth = 266
        this.spriteHeight = 188
       
        this.width = this.spriteWidth / 2.5
        this.height = this.spriteHeight / 2.5
        this.x = Math.random() * (CANVAS_WIDTH2 - this.width)
        this.y = Math.random() * (CANVAS_HEIGHT2 - this.height)
        this.speed = Math.random() * 3 + 1
        this.flapSpeed = Math.floor(this.speed)
        this.frame = 0
        this.speed = Math.random() * 4 + 1
        this.angle = Math.random() * 100
        this.curve = Math.random() * 7
        this.angleSpeed = Math.random() * 0.2
    }
    update(){
        this.x -= this.speed
        this.y += this.curve * Math.sin(this.angle)
        this.angle += this.angleSpeed
        
        if(this.x + this.spriteWidth < 0){ 
            this.x = CANVAS_WIDTH2
            this.y = Math.random() * (CANVAS_HEIGHT2 - this.height)
        }
        if(gameFrame % this.flapSpeed === 0){
            this.frame > 4 ? this.frame = 0 : this.frame++
        }
    }
    draw(){
        ctx2.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)
    }
}

for (let i = 0; i < numberOfEnemies; i++){
    enemyArray2.push(new Enemy2())
}




