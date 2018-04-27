# gundam-cli &middot;  [![PyPI](https://img.shields.io/pypi/status/Django.svg)]()  [![Packagist](https://img.shields.io/packagist/l/doctrine/orm.svg)](https://github.com/JohnsenZhou/gundam-cli/blob/master/LICENSE)

[以中文查看](https://github.com/JohnsenZhou/gundam-cli/blob/master/README_zh-CN.md)

> A front-end project automatically creates submission tool.

## Installation
```
npm install -g gundam-cli
```

## Usage

### Create a new project

```
gundam new <project-name>
```

There are mainly the following options：

- Repository type(github、gitlab)
- The short hand repository string to download the repository from:
	- github: `owner/name`, such as `JohnsenZhou/gundam-cli`
	- gitlab: `custom.com:owner/name`, such as `gitlab.johnsenzhou.com:example/test-projects`
- Project name(default `project-name`)
- Project version number(default the version number of the template)
- Project description
- The developer name
- Whether to perform `git push` operations(If you select Yes, proceed to the next operation. Otherwise, the developer will continue to manually perform `git` operations.)
- Input the new `git remote` address url

As shown below:
![](https://user-gold-cdn.xitu.io/2018/4/26/16301035e0605cc3?w=960&h=500&f=gif&s=9442806)

## Development

### Start by cloning the Git project to your local hard drive:
```
$ git clone https://github.com/JohnsenZhou/gundam-cli.git
```

### Link `gundam-cli` to your development version
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

## Why gundam
> Gundam’s mech is nimble and powerful, Equipped with a super laser sword.

## License
[MIT](https://github.com/JohnsenZhou/gundam-cli/blob/master/LICENSE)
