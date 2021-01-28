# 数据结构与算法学习代码

这个仓库主要用来存放数据结构与算法的实现代码。

## 环境配置

下载编译环境

https://sourceforge.net/projects/mingw-w64/files/

文件列表中选择 x86_64-posix-seh 文件，下载解压即可使用。

添加环境变量

将 mingw64\bin 添加到系统或用户环境变量 PATH 中。

安装 C/C++ VSCODE 扩展。

## 使用

插件安装完成后，随便写一个 CPP 文件，按 F5，VSCODE 会提示你选择编译器（选g++），并帮助生成 launch.json 和 tasks.json。

注意这里主要是对单个文件进行调试，不涉及复杂的工程，所以所有文件应放在根目录，否则可能需要对 launch.json 进行一些调整。

## 测试

`npm test`

nyc 这个包有问题，和当前的 mocha 有冲突，不能安装在当前项目，安装在全局则没问题。
