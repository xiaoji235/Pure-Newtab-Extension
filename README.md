# Pure-Newtab-Extension

Pure 起始页扩展（Pure 新建标签页浏览器扩展）
- 扩展版本：`3.1.1`
- 更新时间：2024-04-04
- 修改内容：
  - 规范index.html文件格式。
  - 去除notice通知。
  - 修复一言api xhr报错问题。
<br><br>
- 支持的图片类型
  - JPG JPEG PNG SVG GIF 等基础格式图片

## 说明
- 该项目参照[联想主页](https://so.lenovo.com.cn/)样式设计
- 如果浏览器不支持使用扩展，可以将[此页面](https://pure-newtab.netlify.app)设置成主页！
- 源码可做扩展、可做web，直接放服务器可访问。
- 压缩包体积较大，是因为苹方字体文件过大（10mb），若服务器流量少，可以自行更换其他字体或修改调用地址，以防攻击者恶意刷流量。

## 完美更新扩展避免cookie失效的方法
- 打开下载好的[压缩文件](https://github.com/xiaoji235/Pure-Newtab-Extension/releases)，进入子文件夹将内部所有文件覆盖到旧路径即可!

## 使用方法
- 首先下载压缩包
- 然后将资源解压到一个文件夹内，注意，该文件夹不能删除！
- 接着把此文件夹移动到安全的地方（只要不被删除即可）
- 进入浏览器把开发者模式和其他扩展选项打开。
- 将文件夹拖入浏览器扩展界面即可！

## 存在的问题
- 目前部分设备的分辨率不太支持，后续会修复。
- 还剩下部分代码冗余，未完全排除。
- 黑色模式有待改进。

- 为什么不直接发crx扩展？
  - 目前此扩展由于未知问题会闪退（自动关闭），浏览器会提示扩展损坏！
- 会不会有安全问题？
  - 本地不会，如果是服务器的话，除非攻击者通过苹方字体（字体包大小10mb）恶意刷流量。

## 截图
![shotcut](https://cdn.jsdelivr.net/gh/xiaoji235/Pure-Newtab/preview/img.png)


## Stargazers over time

[![Stargazers over time](https://starchart.cc/xiaoji235/Pure-Newtab-Extension.svg)](https://starchart.cc/xiaoji235/Pure-Newtab-Extension)

