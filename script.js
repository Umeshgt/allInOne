/** @type {HTMLCanvasElement} */
const canvas1 = document.getElementById("canvas1")
const ctx1 = canvas1.getContext("2d")
const CANVAS_WIDTH1 = canvas1.width = 500
const CANVAS_HEIGHT1 = canvas1.height = 1000
const numberOfEnemies = 10
const enemyArray1 = []

let gameFrame = 0

class Enemy1 {
    constructor() {
        this.image = new Image()
        this.image.src = "enemy1.png"
        //this.speed = Math.random() * 4 - 2
        this.spriteWidth = 293
        this.spriteHeight = 155
        this.width = this.spriteWidth / 2.5  //  Math.random() * 3 + 1.5
        this.height = this.spriteHeight /  2.5 
        this.x = Math.random() * (canvas1.width - this.width)  // fixes its position within the canvas
        this.y = Math.random() * (canvas1.height - this.height)
        this.frame = 0
        this.flapSpeed = Math.floor(Math.random() * 2 + 1)
    }
    update(){
        this.y += Math.random() * 7 - 3.5
        this.x += Math.random() * 7 - 3.5   // letting it move around randomlly
        // animate sprites
        if (gameFrame % this.flapSpeed === 0){      // manipulates flapping wings  
            this.frame > 4 ? this.frame = 0 : this.frame++
        }
    }
    draw(){
       ctx1.drawImage(this.image, this.frame*this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height) 
    }
}

for (let i = 0; i< numberOfEnemies; i++){
    enemyArray1.push(new Enemy1())
}



