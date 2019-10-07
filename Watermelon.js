class Watermelon extends Fruit {
  constructor() {
    super(width*Math.random(), 0, 50, 50, "green")
    this.vy = 2
  }
update() {
    this.y += this.vy
  }
}