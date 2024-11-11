let racers = [];

function setup() {
  createCanvas(800, 400);
  for (let i = 0; i < 4; i++) {
    let shapeType = random(["circle", "square", "triangle"]); // racer shape
    let speed = random(1, 3);   // racer speed
    racers.push(new Racer(50, i * 90 + 60, shapeType, speed)); // i * 90 + 60 = racer number * 90 dist away, 60 from top 
  }
}

function draw() {
  background(0);

  for (let racer of racers) {   // for of loop organization (racer objects inside racer array)
    racer.move();             
    racer.display();            
  }
}

// boost speed for interaction part of assignment 
function mousePressed() {
  for (let racer of racers) {
    if (racer.isClicked(mouseX, mouseY)) { // in class
      racer.boost();     
    }
  }
}

class Racer {
  constructor(x, y, shapeType, speed) {
    this.x = x; // racers position x
    this.y = y; // racers position y
    this.shapeType = shapeType;
    this.speed = speed;
    this.color = color(random(255), random(255), random(255));
  }

  // position and speed for moving
  move() {
    this.x += this.speed;
  }

  // show random racer looks
  display() {
    fill(this.color); // constructor
    noStroke();
    if (this.shapeType === "circle") {
      ellipse(this.x, this.y, 30, 30);
    } else if (this.shapeType === "square") {
      rect(this.x - 15, this.y - 15, 30, 30);
    } else if (this.shapeType === "triangle") {
      triangle(this.x, this.y - 15, this.x - 15, this.y + 15, this.x + 15, this.y + 15);
    }
  }

  isClicked(px, py) {
    return dist(px, py, this.x, this.y) < 15; // dist: mouse and racer
  }

  boost() {
    this.speed += 1; 
  }
}
