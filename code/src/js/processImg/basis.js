var cnv = $('#canvas')[0]
var cxt = cnv.getContext('2d')

import basisImgPath from 'assets/canvas.jpg'
import testPath from 'assets/basisImg.png'
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

let bg_size = String(cnv.width)+'px'+' '+String(cnv.height)+'px'
$('.canvas_wrap').css({
    'background-image': 'url('+ basisImgPath +')',
    'background-position': '0 0',
    'background-size':  bg_size,
    'background-repeat': 'no-repeat'
})



var wrap_move = function(e){
    let canvas_width = $('#canvas').width()
    let canvas_height=$('#canvas').height()

    let wrap_width = $('.canvas_wrap').width()
    let wrap_height = $('.canvas_wrap').height()

    let x_mouse = e.pageX
    let wrap_left_start = x_mouse - (wrap_width/2)

    let mouse_start_boundary_x = wrap_width/2 
    let mouse_boundary_x = canvas_width - (wrap_width/2)
    let wrap_left_boundary = canvas_width - wrap_width

    let y_mouse = e.pageY
    let wrap_top_start = y_mouse - (wrap_height/2)
    let mouse_start_boundary_y = wrap_height/2
    let mouse_boundary_y = canvas_height - (wrap_height/2)
    let wrap_top_boundary = canvas_height - wrap_height 
    
    
    if(x_mouse > mouse_start_boundary_x && x_mouse < mouse_boundary_x) {
        $('.canvas_wrap').css('left', wrap_left_start + 'px')
    } 
    else if (x_mouse >= mouse_boundary_x){
        $('.canvas_wrap').css('left', wrap_left_boundary + 'px')
    } 
    else if (x_mouse <= mouse_start_boundary_x){
        $('.canvas_wrap').css('left', 0 + 'px') 
    }
    
    if(y_mouse > mouse_start_boundary_y && y_mouse < mouse_boundary_y) {
        $('.canvas_wrap').css('top', wrap_top_start + 'px')
    } else if (y_mouse >= mouse_boundary_y){
        $('.canvas_wrap').css('top', wrap_top_boundary + 'px')
    } 
    else if (y_mouse <= mouse_start_boundary_y){
        $('.canvas_wrap').css('top', 0 + 'px') 
    }
    let wrap_top = $('.canvas_wrap').offset().top
    let wrap_left = $('.canvas_wrap').offset().left

    var bg_pos = '-'+ wrap_left + 'px -' + wrap_top + 'px'
    $('.canvas_wrap').css('background-position', bg_pos)

    $('.border_bottom_right').css({
        top: wrap_top + wrap_height - 5,
        left: wrap_left + wrap_width - 5
    })
}

$('.canvas_wrap').mousemove(wrap_move)

$('.canvas_wrap').click(function(){
    // 
    var objEvent = $._data($('.canvas_wrap')[0], 'events')
    if(objEvent['mousemove']){
        $('.canvas_wrap').unbind('mousemove')
    } else {
        $('.canvas_wrap').mousemove(wrap_move) 
    }
})

$('.border_bottom_right').mousedown(function(){

    $('.border_bottom_right').mousemove(function(e){
        let x_mouse = 0
        let y_mouse = 0
        x_mouse = e.pageX
        y_mouse = e.pageY
        
        $('.border_bottom_right').css({
            top: y_mouse - 5,
            left: x_mouse - 5
        })

        let wrap_top = $('.canvas_wrap').offset().top
        let wrap_left = $('.canvas_wrap').offset().left

        $('.canvas_wrap').css({
            width: (x_mouse - wrap_left) + 'px',
            height: (y_mouse - wrap_top) + 'px'
        })   
    })
                
   
})
$('.border_bottom_right').mouseup(function(){
    $('.border_bottom_right').unbind('mousemove') 
})

$('#canvas').mouseout(function (e) {
    $('#canvas').css('opacity', '1') 
})

