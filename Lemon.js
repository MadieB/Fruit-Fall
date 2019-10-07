class Lemon extends Fruit {
  constructor() {
    super(width*Math.random(), 0, 30, 30, "yellow")
     this.vy = Math.random()*5
  }
update() {
    this.y += this.vy
  }
}