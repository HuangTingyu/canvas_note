import basisImgPath from 'assets/basisImg.png'
var cnv = $('#canvas')[0]
var cxt = cnv.getContext('2d')

// 创建image对象
var image = new Image()
image.src = basisImgPath
image.onload = function () {
    cxt.drawImage(image, 0, 0, 96, 75 )
}
