class Basket{
  constructor(x, y) {
    this.x = x
    this.y = y
    this.vx = 0;
    this.vy = 0;
    this.width = 50
    this.height = 25
    this.color = (88, 56, 31 )
    this.SPEED = 5
    this.active = true
  }
  draw() {
    fill(this.color)
    rect(this.x, this.y, this.width, this.height)
  }
 
  keyPressed() {
    } if (keyCode = LEFT_ARROW) {
      this.move(-1, 0)
    } else (keyCode = RIGHT_ARROW) {
      this.move(1, 0)
    }
}