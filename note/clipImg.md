## 截图

```
//drawImage(images,相对于裁剪图片的X, 相对于裁剪图片的Y, 裁剪的高度, 裁剪的宽度, 显示在画布的X, 显示在画布的Y, 显示在画布多高, 显示在画布多宽);
ctx.drawImage(images,t.clipPos.x, t.clipPos.y, t.clipPos.height, t.clipPos.width, 0, 0, t.clipPos.height, t.clipPos.width); //裁剪图片
```

