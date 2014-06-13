// create an new instance of a pixi stage
var stage = new PIXI.Stage(0xFFFFFF, true);

stage.setInteractive(true);

var renderer = PIXI.autoDetectRenderer(620, 380, document.getElementById("pixi"));

// the current page in the story
var page = new Page( stage );

// how to get timing updates.  
var previousNow = Date.now(); // grab current time
var dt = 0; // how much time has passed between calls to Date.

// Just click on the stage to draw random lines
stage.click = stage.tap = function ( idata ) {
    page.click( idata );
};

function animate() {
    // grab timing
    var now = Date.now();
    dt = (now - previousNow)*0.001;  // original units are very large.  this makes us avoid 0's later.
    previousNow = now;

    // update the page based on time
    page.update( dt );
   
    // render the stage.
    renderer.render( stage );

    // well we animated once, but let's animate next time too!
    requestAnimFrame( animate );
}

// run the render loop.  jump starts the animations.
requestAnimFrame(animate);

