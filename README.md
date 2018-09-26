# 安装及使用 #
1. 安装
    - 安装 Taro 开发工具 @tarojs/cli 
    > 使用 npm 或者 yarn 全局安装，或者直接使用npx
    ````
    $ npm install -g @tarojs/cli
    $ yarn global add @tarojs/cli
    ````
2. 使用
    > 使用命令创建模板项目
    ````
    $ taro init myApp
    ````
    > npm 5.2+ 也可在不全局安装的情况下使用 npx 创建模板项目
    ````
    $ npx @tarojs/cli init myApp
    ````
    进入项目目录开始开发，可以选择小程序预览模式，或者h5预览模式，若使用微信小程序预览模式，则需要自行下载并打开微信开发者工具，选择预览项目根目录。
    
    ````
    # npm script
    $ npm run dev:weapp
    # 仅限全局安装
    $ taro build --type weapp --watch
    # npx用户也可以使用
    $ npx taro build --type weapp --watch
    H5 编译预览模式
    
    更新 Taro CLI 工具
    
    # taro
    $ taro update self
    # npm 
    npm i -g @tarojs/cli@latest 
    # yarn 
    yarn global add @tarojs/cli@latest 
    更新项目中 Taro 相关的依赖
    
    $ taro update project
    ````
