/**
 * Created by NAVER on 2016-03-22.
 */
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

//드로잉 표면 저장 및 복원
function saveDrawingSurface()
{
    drawingSurfaceImageData = context.getImageData(0, 0, canvas.width, canvas.height);

}

function restoreDrawingSurface()
{
    context.putImageData(drawingSurfaceImageData, 0, 0);
}

//event handler

canvas.onmousedown = function(e)
{
    saveDrawingSurface();
};

canvas.onmousemove = function(e)
{
    var loc = windowToCanvas(e);
    if(dragging)
    {
        restoreDrawingSurface();
        if(guidewires)
        {
            drawGuidewires(mousedown.x, mousedown.y);
        }
    }
};

canvas.onmouseup = function(e)
{
    restoreDrawingSurface();
};