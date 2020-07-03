var cnv = $('#canvas')[0]
var cxt = cnv.getContext('2d')
// 1. 描边 
// 半圆
// cxt.beginPath()
// cxt.arc(80, 80, 50, 0, 180 * Math.PI / 180, true)
// cxt.closePath()
// cxt.strokeStyle = 'HotPink'
// cxt.stroke()

// 圆
// cxt.beginPath()
// cxt.arc(120, 80, 50, 0, 360 * Math.PI / 180, true)
// cxt.closePath()
// 描边
// cxt.strokeStyle = 'HotPink'
// cxt.stroke()
// -------------------------------------------

// 2.填充
cxt.beginPath()
cxt.arc(80, 80, 50, 0, 180 * Math.PI / 180, true)
cxt.closePath()
cxt.fillStyle = 'HotPink'
cxt.fill()

cxt.beginPath()
cxt.arc(120, 80, 50, 0, 360 * Math.PI / 180, true)
cxt.closePath()
cxt.fillStyle = '#9966FF'
cxt.fill()



