# gundam-cli

> gundam-cli 前端项目自动创建提交工具1.0.0版本

## 安装
```
npm install -g gundam-cli
```
> 部分Mac上需执行 `sudo npm install -g gundam-cli`

## 使用

```
gundam new <project-name>
```

主要有以下选项：

- 项目名称（默认`project-name`）
- 项目版本号（默认为脚手架的版本号）
- 项目描述
- 开发人员
- 是否进行`git push`操作（若选是，则进行下一项操作，否则跳出，开发人员后续手动进行`git`操作）
- 输入新项目远端`git`地址

具体操作流程可参见下图：

![Alt text](http://os9glxm8s.bkt.clouddn.com/gundam-cli.gif)

## API
```
  Usage: gundam <command> [options]

  Options:

    -v, --version  output the version number
    -h, --help     output usage information

  Commands:

    new <string>   Creates a new application
```

