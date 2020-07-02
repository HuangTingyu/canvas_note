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

### 矩形知识点

#### 线框

- strokeStyle - ctx对象的属性，可以设置线的颜色


- strokeRect - ctx对象方法，画长方形

strokeRect(x,y,width,height) - x, y是左上角的坐标

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

