class Basket{
  constructor() {
    this.x = (width/2)
    this.y = 300
    this.vx = 0;
    this.width = 75
    this.height = 25
    this.color = (88, 56, 31)
    this.SPEED = 5
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
    if (this.x <=this.width/2|| this.x>=400){
      this.vx = -this.vx
    }
     
    this.x += this.vx

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
}