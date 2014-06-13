// create an new instance of a pixi stage
var stage = new PIXI.Stage(0xFFFFFF, true);

stage.setInteractive(true);

var renderer = PIXI.autoDetectRenderer(620, 380, document.getElementById("pixi"));

var page = new Page( stage );

var previousNow = Date.now();
var dt = 0;

// Just click on the stage to draw random lines
stage.click = stage.tap = page.click;

// run the render loop
requestAnimFrame(animate);

function animate() {
    var now = Date.now();
    dt = now - previousNow;
    previousNow = now;

    page.update( dt );
}

