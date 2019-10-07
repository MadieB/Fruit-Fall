class Orange extends Fruit {
  constructor() {
    super(width*Math.random(), 0, 30, 30, "orange")
    this.vy = 2
  }
update() {
    this.y += this.vy
  }
}