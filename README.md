## 目录
* [介绍](#介绍)
* [安装](#安装)
* [文档](#文档)


## 介绍
CloundBase提供开发应用所需服务和基础设施。让你可以在服务端云函数使用Node.js服务。

需要Node.js v8.0及以上版本。

## 安装
tcb admin Node.js SDK 可以通过`clound-bases`来访问：
```bash
npm install --save clound-base@latest
```

要在你的模块式使用模块可以
```js
var admin = require("clound-bases");
```
或
```js
import * as admin from "clound-bases";
```

## 文档
* [初始化](docs/initialization.md)
* [存储](docs/storage.md)
* [数据库](docs/database.md)
* [云函数](docs/functions.md)

