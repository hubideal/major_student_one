// p5 calls setup() exactly once when the canvas loads

var dataLine = [];

function setup() {
    createCanvas(displayWidth, displayHeight);
    loadTable('wiid.csv', 'header', showData);

    // frameRate(5);
    // noLoop();
}

function showData(data) {
    var count = data.getRowCount();
    console.log(count);
    
    for (var i=0; i<count; i++) {
        var country = data.getString(i, 0);
        var year = data.getString(i, 3);
        var gini = data.getString(i, 8);
        var source = data.getString(i, 9);
       
        if (country == 'Argentina'){
            dataLine.push(new country, source); //new enterData(country, year, gini, source )
    
        }
        
    }
    
    
    for(var j=0; j < 10; j++) {   
        text(dataLine.countryText[j], width/2, (j + 1) * 30);
        
    }
    
    
}


function enterData(_country, _source) {
    var private = {};
            private.countryText = _country;
            private.sourceText = _source;
            console.log(private);
            return private;
            //needs to happen outside the function
}



//this.enterData = function() {
//    this.Year=Year;
//    this.Country=Country;
//    this.Gini=Gini;
//    this.Source=Source;
    


        
 
 
 
    //for (var i=0; i<dataLine.length; i++) {   
        //text(Country[i] + ' | ' + Year[i] + ' | ' + Gini[i] + ' | ' + Source[i], width/2, 30 * (i + 1));
        
    //}



//<!DOCTYPE html>
//<html>
//    <head>
//        <!--p5 core library CDN-->
//        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.min.js"></script>
//
//        <script>
//            // globals
//           var quantity = 100;
//           var paddleColor;
//            var score = 0;
//            var pongBalls = [];
//
//            // p5 calls setup() exactly once when the canvas loads
//            function setup() {
//                createCanvas(500, 500);
//                rectMode(CENTER);
//                for (var i=0; i<quantity; i++) {
//                    pongBalls.push(new PongBall(random(width), random(height)));
//                
//                }
//
//                // paddle color
//                paddleColor = color(255, 255, 0);
//
//             }
//
//            function draw() {
//                background('lightgray');
//                fill('black');
//
//                for (var i=0; i<quantity; i++) {
//                    pongBalls[i].update();
//                    
//                }
//                fill(paddleColor);
//                rect(mouseX, height - 30, width / 6, 10, 5);
//                fill('black');
//                text(score, mouseX, height-25);
//            }
//            
//            function PongBall(myX, myY) {
//            
//                this.x = myX;
//                this.y = myY;
//                this.xSpeed = random(-2.5, 2.5);
//                this.ySpeed = random(-2.5, 2.5);
//
//               
//               
//                
//                this.update = function() {
//        
//                    this.x += this.xSpeed;
//                    this.y += this.ySpeed;
//
//                    // boundaries
//                    // horizontal boundary
//                    if (this.x > width - 5 || this.x < 5) {
//                        this.xSpeed = this.xSpeed * -1; // xSpeed *= -1;
//                    }
//
//                    // top boundary
//                    if (this.y + this.ySpeed < 5) {
//                        this.ySpeed = this.ySpeed * -1; // xSpeed *= -1;
//                    }
//
//                    // paddel boundary
//                    if (this.y >= height - 40 && abs(mouseX-this.x) < width/12 && this.y < height - 40 + this.ySpeed) {
//                        this.ySpeed = this.ySpeed * -1  // ySpeed *= -1;
//                        // fun items
//                        this.xSpeed *= 1.2;
//                        this.ySpeed *= 1.2;
//                        paddleColor = color(random(255), 0, 0);
//                        score++;
//
//                    }
//
//                    ellipse(this.x, this.y, 10, 10);
//                }
//                }
//            
//
//        </script>
//    </head>
//    <body>
//
//    </body>
//</html>//