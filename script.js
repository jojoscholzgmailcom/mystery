var c = document.getElementById('canvas');
var ctx = c.getContext("2d");
var slider = document.getElementById("myRange");
var output = document.getElementById("value");
var outerRing = new Image();
var val = 0;
outerRing.onload=function(){
    drawRotatedImage(outerRing,250, 250,c.width,c.height, 5- val*10);
};
outerRing.src="wheel.png";
var innerRing = new Image();
innerRing.onload=function(){
    drawRotatedImage(innerRing,250, 250, c.width*0.75, c.height*0.75, 5);
};
innerRing.src="wheel.png";
var TO_RADIANS = Math.PI/180; 
function drawRotatedImage(image, x, y, width, height, angle){ 
    ctx.save(); 
    ctx.translate(x, y);
    ctx.rotate(angle * TO_RADIANS);
    ctx.drawImage(image, -(width/2), -(height/2), width, height);
    ctx.restore(); 
}

slider.oninput = function() {
    ctx.clearRect(0,0,c.width,c.height);
    val = this.value;
    output.innerHTML = this.value;
    drawRotatedImage(outerRing,250, 250,c.width,c.height, 5-this.value*13.84615);
    drawRotatedImage(innerRing,250, 250, c.width*0.75, c.height*0.75, 5);
}
