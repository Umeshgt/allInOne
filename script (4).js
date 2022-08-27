const canvas4 = document.getElementById("canvas4")
const ctx4 = canvas4.getContext("2d")
const CANVAS_WIDTH4 = canvas4.width = 500
const CANVAS_HEIGHT4 = canvas4.height = 1000

const enemyArray4 = []


class Enemy4{
    constructor(){
        this.image = new Image()
        this.image.src = "enemy4.png"
        this.spriteWidth = 213
        this.spriteHeight = 213
       
        this.width = this.spriteWidth / 2.5
        this.height = this.spriteHeight / 2.5
        this.x = Math.random() * (CANVAS_WIDTH4 - this.width)
        this.y = Math.random() * (CANVAS_HEIGHT4 - this.height)
        this.newX = Math.random() * (CANVAS_WIDTH4 - this.width)
        this.newY = Math.random() * (CANVAS_HEIGHT4 - this.height)
        
        this.flapSpeed = 2
        this.interval = Math.floor(Math.random() * 25 + 100)
        this.frame = 0
        
    }
    update(){
        if(gameFrame % this.interval === 0){
            this.newX = Math.random() * (CANVAS_WIDTH4 - this.width)
            this.newY = Math.random() * (CANVAS_HEIGHT4 - this.height)
        }
        let dx = this.x - this.newX
        let dy = this.y - this.newY
        this.x -= dx/15
        this.y -= dy/15
                
        if(this.x + this.spriteWidth < 0){ 
            this.x = CANVAS_WIDTH4
            //this.y = Math.random() * (CANVAS_HEIGHT - this.height)
        }
        if(gameFrame % this.flapSpeed === 0){
            this.frame > 4 ? this.frame = 0 : this.frame++
        }
    }
    draw(){
        ctx4.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)
    }
}

for (let i = 0; i < numberOfEnemies; i++){
    enemyArray4.push(new Enemy4())
}




function animate(){
    
    ctx1.clearRect(0, 0, CANVAS_WIDTH1, CANVAS_HEIGHT1)
    ctx2.clearRect(0, 0, CANVAS_WIDTH2, CANVAS_HEIGHT2)
    ctx3.clearRect(0, 0, CANVAS_WIDTH3, CANVAS_HEIGHT3)
    ctx4.clearRect(0, 0, CANVAS_WIDTH4, CANVAS_HEIGHT4)
    enemyArray1.forEach(enemy => {
        enemy.update()
        enemy.draw()
    })
    enemyArray2.forEach(enemy => {
        enemy.update()
        enemy.draw()
    })
    enemyArray3.forEach(enemy => {
        enemy.update()
        enemy.draw()
    })
    enemyArray4.forEach(enemy => {
        enemy.update()
        enemy.draw()
    })


    gameFrame++

    requestAnimationFrame(animate)
}

animate()