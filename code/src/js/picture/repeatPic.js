import repImgPath from 'assets/repeatPic.png'
var cnv = $('#canvas')[0]
var cxt = cnv.getContext('2d')
var repImg = new Image ()
repImg.src = repImgPath
repImg.onload = function () {
    var pattern = cxt.createPattern(repImg, 'repeat')
    cxt.fillStyle = pattern
    cxt.fillRect(0, 0, cnv.width, cnv.height)
}