## Canvas图片

### Webpack引入图片

配置 `webpack.config.js` ,  下载`file-loader` 和 `url-loader`

```
module: {
    rules: [{
        test: /\.(jpg|png|gif)$/,
        use: {
            loader: 'url-loader',
            // placeholder占位符
            options: {
                name: '[name]_[hash].[ext]',
                limit: 20480
            }
        }
    },
    .......
```

#### 节省路径

```js
resolve: {
    extensions: ['.js', '.css'],
    alias: {
      'js': path.resolve(__dirname, './src/js'),
      'assets': path.resolve(__dirname, './src/assets'),
    }
  },
```

`src\js\picture\basisPic.js`

```js
import basisImgPath from 'assets/basisImg.png'
var cnv = $('#canvas')[0]
var cxt = cnv.getContext('2d')

// 创建image对象
var image = new Image()
image.src = basisImgPath
image.onload = function () {
    cxt.drawImage(image, 0, 0, 960, 750, 40, 20, 96, 75 )
}
```

此处只能用import引入，require不行。

### Canvas图片设置

1. `drawImage(image , dx , dy)`

dx —— 图片左上角横坐标

dy —— 图片右上角纵坐标

2. `drawImage(image , dx , dy , dw , dh)`

dx, dy 同上

dw —— 图片宽度

dh —— 图片高度

3. drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh)

s 开头的皆指原图片，

sx, sy —— 原图片截取起始位置的x, y坐标

sw, sh —— 原图片截取的宽高

### Canvas图片平铺

createPattern, fillRect

cxt.createPattern(image, type)

type 可以选择 repeat, repeat-x, repeat-y, no-repeat

`src\js\picture\repeatPic.js`

```js
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
```

### Canvas图片切割

cxt.clip()

用法 ——

1. 绘制图形
2. cxt.clip()
3. 加载图片