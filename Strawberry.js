class Strawberry extends Fruit {
  constructor() {
    super(width*Math.random(), 0, 20, 30, "red", 5)
     this.vy = 5
  }
update() {
    this.y += this.vy
  }
}