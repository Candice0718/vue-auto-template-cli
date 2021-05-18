# vue-auto-template-cli
快速生成一套vue项目模版cli。包含的功能：增加代码生成器支持、自动生成项目模版文件、自动注册路由、自动配置好axios、mock数据、集成eslint与husky、达到开箱即用。统一项目代码结构，并减少重复性配置工作，提升开发效率。

```bash
npm i -g vue-auto-template-cli 
vue-template init || vue-template init
```

- 默认模版: 
     - 区分平台B对应为B端（vue、elementUI）、C移动端（Vue、VantUI）
- 自定义模版

     - git仓库所有者
     - git仓库项目名
     - 本地项目安装目录/项目名（本地项目安装目录：支持绝对路径，支持相对路径。）

