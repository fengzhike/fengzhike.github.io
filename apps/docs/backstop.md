# backstop前端自动化样式回归测试
backstop是一个能够实现css自动化回归测试的工具，基于比较网站快照的变化的回归测试工具，支持设置多浏览器尺寸，可以测试响应式布局。

闲话少叙 上代码

## 一、安装

```
$ npm install -g backstopjs
```

## 二、初始化

```
$ backstop init
```
backstop init之后会生成一个backstop.json的文件和backstop_data的目录

## 三、配置backstop.json
在backstop.json中

```
{
  "id": "backstop_default",
  "viewports": [ // 各种尺寸设置
    {
      "label": "phone",
      "width": 320,
      "height": 480
    },
    {
      "label": "tablet",
      "width": 1024,
      "height": 768
    }
  ],
  "onBeforeScript": "chromy/onBefore.js", // 运行前执行的脚本
  "onReadyScript": "chromy/onReady.js",// 运行前执行的脚本
  "scenarios": [
    {
      "label": "BackstopJS Homepage",
      "cookiePath": "backstop_data/engine_scripts/cookies.json",
      "url": "https://yj.rrtimes.com/", //目标页面路径，
      "referenceUrl": "",
      "readyEvent": "",
      "readySelector": "",
      "delay": 0,
      "hideSelectors": [],
      "removeSelectors": [],
      "hoverSelector": "",
      "clickSelector": "",
      "postInteractionWait": "",
      "selectors": [],
      "selectorExpansion": true,
      "misMatchThreshold" : 0.1,
      "requireSameDimensions": true
    }
  ],
  "paths": {
    "bitmaps_reference": "backstop_data/bitmaps_reference", //原图
    "bitmaps_test": "backstop_data/bitmaps_test",//页面截图
    "engine_scripts": "backstop_data/engine_scripts",
    "html_report": "./backstop_data/html_report", //测试报告
    "ci_report": "backstop_data/ci_report"
  },
  "report": ["browser"], //用浏览器打开
  "engine": "chrome", //用什么浏览器
  "engineFlags": [],
  "asyncCaptureLimit": 5,
  "asyncCompareLimit": 50,
  "debug": false,
  "debugWindow": false
}
```

## 运行

把bitmaps_reference里面的命名为backstop_default_${label}_0_document_${序号}_tablet

```
$ backstop test
```
您就可以看到神奇的效果了

* * *
2017.10.31
