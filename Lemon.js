class Lemon extends Fruit {
  constructor() {
    super(width*Math.random(), 0, 30, 30, "yellow", 10)
     this.vy = 3
  }
update() {
    this.y += this.vy
  }
}