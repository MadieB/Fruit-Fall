class Strawberry extends Fruit {
  constructor() {
    super(width*Math.random(), 0, 20, 30, "red", 1)
     this.vy = 2
  }
update() {
    this.y += this.vy
  }
}