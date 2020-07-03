var cnv = $('#canvas')[0]
var cxt = cnv.getContext('2d')
cxt.lineWidth = 10
// cxt.arc(70, 70, 50, 0, -90 * Math.PI / 180, false)
cxt.moveTo(50, 50)
cxt.lineTo(100, 50)
cxt.lineTo(50, 100)
cxt.lineTo(100, 100)
cxt.lineJoin = 'round'
cxt.stroke()