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
  fruits.push(orange)
  fruits.push(strawberry)
  fruits.push(lemon)
  fruits.push(watermelon)
  
  basket = new Basket()
   frameRate(30);
}

function draw() {
  background(143, 69, 0);
    if (frameCount%125 == 0){
      watermelon = new Watermelon()
      fruits.push(watermelon)
    }
    if (frameCount%100 == 0){
      orange = new Orange()
      fruits.push(orange)
    }
    if (frameCount%75 == 0){
      lemon = new Lemon()
      fruits.push(lemon)
    }
    if (frameCount%50 == 0){
      strawberry = new Strawberry()
      fruits.push(strawberry)
    }
  
    fruits.filter(fruit => fruit.active).forEach(fruit =>{
    fruit.update()
    fruit.draw()
  })

    basket.draw()
    basket.update()
  
    checkCollisions()
    checkDrop()
  
    text(basket.score, 380, 390)
  
if(basket.score < 0 ){
    text("Game Over!", width/2, height/2)
    basket.die()
  }
}

function checkCollisions() {
  for (let i = 0; i < fruits.length; i++) {
     let fruit = fruits[i]
     basket.collect(fruit)
    }
}

function checkDrop(){
  for (let i = 0; i < fruits.length; i++) {
     let fruit = fruits[i]
     if (fruit.active == false) continue
     if (fruit.y >= 500){
       fruit.dropped()
       basket.score -= 10
     }
    }
}

function keyPressed() {
  basket.keyPressed()

}

function keyReleased() {
  basket.stop()
}

function checkCC(x, y,d, x2, y2, d2, b = 0) {
  if( dist(x,y,x2,y2) <= (d/2)+(d2/2) + b){
    return true;
  }
  return false;
}