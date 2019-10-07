//let basket
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
  //basket = new Basket()
}

function draw() {
  background(143, 69, 0);
    orange.draw()
    orange.update()
    strawberry.draw()
    strawberry.update()
    lemon.draw()
    lemon.update()
    watermelon.draw()
    watermelon.update()
    //basket.draw()
  
}