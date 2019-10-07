class Strawberry extends Fruit {
  constructor() {
    super(width*Math.random(), 0, 20, 30, "red")
     this.vy = 2
  }
update() {
    this.y += this.vy
  }
}