var btn = require('./basisRect.art')
var cnv = $('#canvas')[0]
var cxt = cnv.getContext('2d')
$('#root').append(btn())
$('#btn').bind('click', function(){
    cxt.clearRect(0, 0, cnv.width, cnv.height)
})
cxt.strokeStyle = 'red'
cxt.strokeRect(50, 50, 80, 80)
cxt.fillStyle = 'pink'
cxt.fillRect(50, 50, 80, 80)
