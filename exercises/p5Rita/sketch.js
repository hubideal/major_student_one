var input;
var ritaString;
var content;
// checkout Rita featureshttps://rednoise.org/rita/reference/index.php

function setup() {
    noCanvas();
    input = createInput();
    input.changed(rita);  //Javascript  function - references p5
    content = createElement('div');
    content.id('content');
}

function rita(event){
     //important brings back what was typed on the screen
    var str = event.target.value;
    
    ritaString = RiString(str);
    
    var words = ritaString.words(); //you can do a lot with this.  Check rita website.
    console.log(words);
    
    words.forEach(function(element) {
         var features = RiString(element).features();
         console.log(features);
         var span = createElement('span', features.text);
          //pos = parts of speech
         if (features.pos === 'nn')
            span.style('background', 'purple');
            
    
    span.parent(content);
        
    });
}

//check the index.  I added css to it.