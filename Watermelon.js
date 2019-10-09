class Watermelon extends Fruit {
  constructor() {
    super(width*Math.random(), 0, 50, 50, "green", 25)
    this.vy = 2
  }
update() {
    this.y += this.vy
  }
}