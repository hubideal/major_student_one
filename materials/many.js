// Example: Two Car objects
var myCarMany = [];
var quantity = 1000;

function setup() {
  createCanvas(windowWidth,windowHeight);
  // Parameters go inside the parentheses when the object is constructed.
  for (var i =0; i <quantity; i++) {
    myCarMany.push(new Car(color(random(255), random(255),random(255)),0,random(height),random(8)));
  }
}

function draw() {
  background(255);
  for (var i =0; i < quantity; i++) {
    myCarMany[i].drive();
    myCarMany[i].display();
  }
}

// Even though there are multiple objects, we still only need one class.
// No matter how many cookies we make, only one cookie cutter is needed.
function Car(color,xpos,ypos,xspeed) {
  //property
  this.color = color;
  this.xpos = xpos;
  this.ypos = ypos;
  this.xspeed = xspeed;

  //method
  this.display = function(){
    stroke(0);
    fill(this.color);
    rectMode(CENTER);
    rect(this.xpos, this.ypos, 20, 10);
}
  }
  
  this.drive = function(){
    this.xpos = this.xpos + this.xspeed;
    if(this.xpos > window.innerWidth){
      this.xpos = 0;
    }
  };

