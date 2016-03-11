/**
 * Created by NAVER on 2016-02-29.
 */
var canvas = document.getElementById('canvas');
var readout = document.getElementById('readout');
var context = canvas.getContext('2d');
var spritesheet = new Image();

//function......................................
function windowToCanvas(canvas, x, y)
{
    var bbox = canvas.getBoundingClientRect();
    return { x: x - bbox.left * (canvas.width / bbox.width), y: y - bbox.top * (canvas.height / bbox.height)};
}

function drawBackground() {
    var VERTICAL_LINE_SPACING = 12;
    var i = context.canvas.height;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.strokeStyle = 'lightgray';
    context.lineWidth = 0.5;

    while (i > VERTICAL_LINE_SPACING * 4) {
        context.beginPath();
        context.moveTo(0, i);
        context.lineTo(context.canvas.width, i);
        context.stroke();
        i -= VERTICAL_LINE_SPACING;
    }
}
function drawSpritesheet()
{
    context.drawImage(spritesheet, 0, 0);
}

function drawGuidelines(x, y)
{
    context.strokeStyle = 'rgba(0, 0, 230, 0.8)';
    context.lineWidth = 0.5;
    drawVerticalLine(x);
    drawHorizontalLine(y);

}

function updateReadout(x, y)
{
    readout.innerText = '(' + x.toFixed(0) + ', ' + y.toFixed(0) + ')';
}

function drawHorizontalLine(y)
{
    context.beginPath();
    context.moveTo(0, y + 0.5);
    context.lineTo(context.canvas.width, y + 0.5);
    context.stroke();
}

function drawVerticalLine(x)
{
    context.beginPath();
    context.moveTo(x + 0.5, 0);
    context.lineTo(x + 0.5, context.canvas.height);
    context.stroke();
}

//event handler....................................
canvas.onmousemove = function(e)
{
    var loc = windowToCanvas(canvas, e.clientX, e.clientY);

    drawBackground();
    drawSpritesheet();
    drawGuidelines(loc.x, loc.y);
    updateReadout(loc.x, loc.y);
}

//init................................................
console.log("start");
spritesheet.src = 'images/running-sprite-sheet.png';
spritesheet.onload = function(e)
{
    drawSpritesheet();
};

drawBackground();

