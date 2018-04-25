# gundam-cli

> gundam-cli 前端项目自动创建提交工具1.0.0版本

## 安装
```
npm install -g gundam-cli
```

## 使用

```
gundam new <project-name>
```

主要有以下选项：

- 仓库类型（github、gitlab）
- 模板地址
	- 若仓库类型选择github填写格式为：`owner/name`, 例如`JohnsenZhou/gundam-cli`
	- 若仓库类型选择gitlab填写格式为： `custom.com:owner/name`, 例如`gitlab.johnsenzhou.com:example/test-projects`
- 项目名称（默认`project-name`）
- 项目版本号（默认为模板的版本号）
- 项目描述
- 开发人员名称
- 是否进行`git push`操作（若选是，则进行下一项操作，否则跳出，开发人员后续手动进行`git`操作）
- 输入新项目远端`git`地址

## 开发

### 克隆到本地
```
$ git clone https://github.com/JohnsenZhou/gundam-cli.git
```

### 软链接`gundam-cli`到开发环境
```
$ cd gundam-cli
$ npm link
```

## API
```
  Usage: gundam <command> [options]

  Options:

    -v, --version  output the version number
    -h, --help     output usage information

  Commands:

    new <string>   Creates a new application
```

## 命名由来
> Gundam 中文名译为高达，主要武器是一把激光剑，机动性强。

## License
[MIT](https://github.com/JohnsenZhou/gundam-cli/blob/master/LICENSE)
