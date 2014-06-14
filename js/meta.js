function padZero( string ) {
    if ( string.length == 1 )
        return "0"+string;
    else if ( string.length == 2 )
        return string;
    else
        return string.slice(0,2);

};

function makeColor( r, g, b ) {
    return "#" + padZero( Math.round(r).toString(16) )
               + padZero( Math.round(g).toString(16) )
               + padZero( Math.round(b).toString(16) );
};

// pretending to make classes in javascript!

function Page( stage ) {
    //setup.

    // grab a hold of the stage
    this.stage = stage;

    this.graphics = new PIXI.Graphics();    
    this.stage.addChild(this.graphics);

    //this.array = array;
    this.count = 0;

    // set a fill and line style
    this.graphics.beginFill(0xFF3300);
    this.graphics.lineStyle(10, 0xffd900, 1);

    // draw a shape
    this.graphics.moveTo(50,50);
    this.graphics.lineTo(250, 50);
    this.graphics.lineTo(100, 100);
    this.graphics.lineTo(250, 220);
    this.graphics.lineTo(50, 220);
    this.graphics.lineTo(50, 50);
    this.graphics.endFill();

    // set a fill and line style again
    this.graphics.lineStyle(10, 0xFF0000, 0.8);
    this.graphics.beginFill(0xFF700B, 1);

    // draw a second shape
    this.graphics.moveTo(210,300);
    this.graphics.lineTo(450,320);
    this.graphics.lineTo(570,350);
    this.graphics.lineTo(580,20);
    this.graphics.lineTo(330,120);
    this.graphics.lineTo(410,200);
    this.graphics.lineTo(210,300);
    this.graphics.endFill();

    // draw a rectangle
    this.graphics.lineStyle(2, 0x0000FF, 1);
    this.graphics.drawRect(50, 250, 100, 100);

    // draw a circle
    this.graphics.lineStyle(0);
    this.graphics.beginFill(0xFFFF0B, 0.5);
    this.graphics.drawCircle(470, 200,100);

    this.graphics.lineStyle(20, 0x33FF00);
    this.graphics.moveTo(30,30);
    this.graphics.lineTo(600, 300);

    // let's create moving shape
    this.thing = new PIXI.Graphics();
    this.stage.addChild(this.thing);

    this.thing.position.x = 620/2;
    this.thing.position.y = 380/2;
};

// how to make functions that won't get initiated each new Page comes around...

Page.prototype.update = function( dt ) {
    this.count += 5 * dt;
//    var arrayLength = this.array.length;
//    for (var i=0; i<arrayLength; i++) {
//        this.array[i].update( dt )
//    } 
    this.thing.clear();

    this.thing.clear();
    this.thing.lineStyle(30, 0xff0000, 1);
    this.thing.beginFill(0xffFF00, 0.5);

    //graphics.moveTo(50,50+Math.cos(this.count)*20);
    //graphics.lineTo(250+Math.sin(this.count)*20, 50);

    this.thing.moveTo(-120 + Math.sin(this.count) * 20, -100 + Math.cos(this.count)* 20);
    this.thing.lineTo(120 + Math.cos(this.count) * 20, -100 + Math.sin(this.count)* 20);
    this.thing.lineTo(120 + Math.sin(this.count) * 20, 100 + Math.cos(this.count)* 20);
    this.thing.lineTo(-120 + Math.cos(this.count)* 20, 100 + Math.sin(this.count)* 20);
    this.thing.lineTo(-120 + Math.sin(this.count) * 20, -100 + Math.cos(this.count)* 20);

    this.thing.rotation = this.count  * 0.5;
    document.body.style.backgroundColor =  makeColor( 0x35 + Math.sin(this.count*0.05)*0x20,
                                                      0x35 + Math.sin(this.count*0.03)*0x20, 
                                                      0x35 + Math.sin(this.count*0.04)*0x20 );
    //document.write( (Math.round(-0.0 * 0x440000)).toString(16) );
    //document.write("#"+(   0x555555 + Math.round( Math.sin(this.count*0.00001)*0x400004 )   ).toString(16) );
};

Page.prototype.click = function( idata ) {
    for ( var i=0; i< 300; i++) {
        this.graphics.lineStyle(Math.random() * 30, Math.random() * 0xFFFFFF, 1);
        this.graphics.moveTo(Math.random() * 620,Math.random() * 380);
        this.graphics.lineTo(Math.random() * 620,Math.random() * 380);
    }
};


// need triggers to add things to a page
