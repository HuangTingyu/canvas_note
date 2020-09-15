var cnv = $('#canvas')[0]
var cxt = cnv.getContext('2d')

import basisImgPath from 'assets/canvas.jpg'
var image = new Image()
image.src = basisImgPath
cnv.height = 600 * (4270 / 6406)
image.onload = function () {
    cxt.scale(600 / 6406 , cnv.height / 4270)
    cxt.drawImage(image, 0, 0, 6406, 4270 )
}

$('#canvas').mouseover(function (e) {
    $('#canvas').css('opacity', '0.5') 
})

$('.canvas_wrap').mouseover(function(){
    $('#canvas').css('opacity', '0.5')  
})

$('#canvas').mousemove(function(e){
    let x_mouse = e.pageX
    let y_mouse = e.pageY
    let wrap_left = x_mouse - 50
    let wrap_top = y_mouse - 100
    let boundary_x = $('#canvas').width() - $('.canvas_wrap').width()
    let boundary_y = $('#canvas').height() - $('.canvas_wrap').height() 
    
    if(x_mouse > 50 && x_mouse < boundary_x) {
        $('.canvas_wrap').css('left', wrap_left + 'px')
    } else if (x_mouse >= boundary_x){
        $('.canvas_wrap').css('left', boundary_x + 'px')
    } else if (x_mouse <= 50){
        $('.canvas_wrap').css('left', x_mouse + 'px') 
    }
    
    if(y_mouse > 100 && y_mouse < boundary_y) {
        $('.canvas_wrap').css('top', wrap_top + 'px')
    } else if (y_mouse >= boundary_y){
        $('.canvas_wrap').css('top', 200 + 'px')
    } 
    else if (y_mouse <=100){
        $('.canvas_wrap').css('top', y_mouse + 'px') 
    }
})

$('#canvas').mouseout(function (e) {
    $('#canvas').css('opacity', '1') 
})

