import basisImgPath from 'assets/basisImg.png'
var cnv = $('#canvas')[0]
var cxt = cnv.getContext('2d')

cxt.beginPath()
cxt.arc(70, 70, 50, 0, 360 * Math.PI / 180, true)
cxt.closePath()
cxt.stroke()

cxt.clip()

var image = new Image()
image.src = basisImgPath
image.onload = function () {
    cxt.drawImage(image, 20, 20, 192, 150 )
}