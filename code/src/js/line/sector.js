var cnv = $('#canvas')[0]
var cxt = cnv.getContext('2d')

createSector(cxt, cnv.width / 2, cnv.height / 2, 50, 30, 120)
cxt.fillStyle = 'HotPink'
cxt.fill()

function createSector (cxt, x, y, r, angle1, angle2) {
    cxt.beginPath()
    cxt.moveTo(x, y)
    cxt.arc(x, y, r, angle1 * Math.PI / 180, angle2 * Math.PI / 180, false)
    cxt.closePath()
}