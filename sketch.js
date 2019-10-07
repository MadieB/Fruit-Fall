let basket
let orange
let strawberry
let lemon
let watermelon
let fruits = []

function setup() {
  createCanvas(400, 400);
  orange = new Orange()
  strawberry = new Strawberry()
  lemon = new Lemon()
  watermelon = new Watermelon()
  basket = new Basket()
   frameRate(30);
}

function draw() {
  background(143, 69, 0);

    orange.draw()
    strawberry.draw()
    lemon.draw()
    watermelon.draw()
  
    basket.draw()
  
    strawberry.update()
    orange.update()
    lemon.update()
    watermelon.update()
    basket.update()
  
}
function keyPressed() {
  basket.keyPressed()

}

function keyReleased() {
  basket.stop()
}
