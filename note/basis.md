## 直线

### 直线知识点

- moveTo 将笔画移到该点，开始绘图
- lineTo 笔画从起点开始画，画到lineTo指向的点

x轴正方向向右

y轴正方向向下

#### 实例 画两条平行线

`code\src\js\line\basisLine.js`

```js
var cnv = $('#canvas')[0]
var cxt = cnv.getContext('2d')
cxt.moveTo(50, 50)
cxt.lineTo(100, 50)
cxt.moveTo(50, 100)
cxt.lineTo(100, 100)
cxt.stroke()
```

## 矩形

### 矩形知识点

#### 线框

- strokeStyle - ctx对象的属性，可以设置线的颜色


- strokeRect - ctx对象方法，画长方形

strokeRect(x,y,width,height) - x, y是左上角的坐标

#### 虚线

- setLineDash(array) - 设置虚线样式

setLineDash([10, 5]) - 10px实线 + 5px虚线循环

```
......
cxt.strokeStyle = 'red'
cxt.setLineDash([10, 5])
cxt.strokeRect(50, 50, 80, 80)
```

#### 填充

- fillStyle - 填充颜色
- fillRect - 填充长方形
- clearRect - 清掉Canvas画布

#### 实例1 画出红框长方形

`code\src\js\line\basisRect.js`

```js
var cnv = $('#canvas')[0]
var cxt = cnv.getContext('2d')
cxt.strokeStyle = 'red'
cxt.strokeRect(50, 50, 80, 80)
cxt.fillStyle = 'pink'
cxt.fillRect(50, 50, 80, 80)
```

#### 实例2 清空画布

```js
var cnv = $('#canvas')[0]
var cxt = cnv.getContext('2d')
$('#root').append(btn())
$('#btn').bind('click', function(){
    cxt.clearRect(0, 0, cnv.width, cnv.height)
})
```

## 圆形

### 描边圆

1. 开始路径 beginPath
2. arc() 画圆
3. 结束路径 closePath (不写这一行，则弧线不闭合)
4. 描边操作 stroke

`code\src\js\line\basisiCircle.js`

```js
var cnv = $('#canvas')[0]
var cxt = cnv.getContext('2d')
// 半圆
cxt.beginPath()
cxt.arc(80, 80, 50, 0, 180 * Math.PI / 180, true)
cxt.closePath()
cxt.strokeStyle = 'HotPink'
cxt.stroke()

// 圆
cxt.beginPath()
cxt.arc(120, 80, 50, 0, 360 * Math.PI / 180, true)
cxt.closePath()
// 描边
cxt.strokeStyle = 'HotPink'
cxt.stroke()

```

### 填充圆

`code\src\js\line\basisiCircle.js`

```js
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
```

### 扇形图

`code\src\js\line\sector.js`

```js
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
```

### 重要属性

### lineWidth 规定线宽

单位是 px

### lineCap 线头尾形状

通过设置lineCap画出的Z形，头尾变成了圆角

![lineCap](.\img\lineCap.png)

`code\src\js\line\lineAttr.js`

```js
var cnv = $('#canvas')[0]
var cxt = cnv.getContext('2d')
cxt.lineWidth = 10
cxt.moveTo(50, 50)
cxt.lineTo(100, 50)
cxt.lineTo(50, 100)
cxt.lineTo(100, 100)
cxt.lineCap = 'round'
cxt.stroke()
```

### lineJoin 线连接处形状

通过设置lineJoin画出的Z形，连接处变成了圆角

![lineCap](.\img\lineJoin.png)

`code\src\js\line\lineAttr.js`

```js
......
cxt.lineJoin = 'round'
......
```

