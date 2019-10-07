class Fruit{
  constructor(x, y, w, h, c) {
    this.x = x
    this.y = y
    this.vy = 0;
    this.width = w
    this.height = h
    this.color = c
    this.SPEED = 5
    this.active = true
  }
  draw() {
    fill(this.color)
    ellipse(this.x, this.y, this.width, this.height)
  }
  move(dy) {
    this.vy = dy * this.SPEED
  }
  collected() {
    this.active = false
  }
  dropped() {
    this.active = false
  }
}