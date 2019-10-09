class Basket{
  constructor() {
    this.x = (width/2)
    this.y = 350
    this.vx = 0;
    this.width = 90
    this.height = 40
    this.color = (88, 56, 31)
    this.SPEED = 5
    this.score = 0
    this.active = true
  }
  draw() {
    fill(this.color)
    rectMode(CENTER)
    rect(this.x, this.y, this.width, this.height)
  }
   move(dx) {
    this.vx = dx * this.SPEED
   }
   update() {
    if (this.x <=this.width/2|| this.x>=550){
      this.vx = -this.vx
    }
     
    this.x += this.vx

  }
  collect(fruit) {
    if (fruit.active && checkCC(this.x, this.y, this.width, fruit.x, fruit.y, fruit.width) ) {
        fruit.caught()
        this.score += fruit.score
    }
  }
  
  collect(bomb) {
    if (bomb.active && checkCC(this.x, this.y, this.width, bomb.x, bomb.y, bomb.width) ) {
        fruit.caught()
        this.score -= this.score - 1
    }
  }
  
  keyPressed() {
     if (keyCode === LEFT_ARROW) {
      this.move(-1, 0)
    } else if (keyCode === RIGHT_ARROW){
      this.move(1, 0)
    }
  }
  
  stop() {
    this.vx = 0
  }
  
  die(){
    this.active = false
  }
}