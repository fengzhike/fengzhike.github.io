# lolcat 一个在 Linux 终端中输出彩虹特效的命令行工具
通过管道'|'讲文本流交给lolcat输出，会出现意想不到的效果

## 安装
lolcat是一个基于Ruby的程序，确保先装ruby,mac自带了Ruby，可以忽略
### Linux安装lolcat
```
$ sudo apt-get install lolcat      [在基于 APT 的系统中]
$ sudo yum install lolcat          [在基于 Yum 的系统中]
$ sudo dnf install lolcat          [在基于 DNF 的系统中]
```
### mac安装lolcat
```
$ gem install lolcat
```
## 使用
- 查看lolcat的帮助信息
```
$ lolcat -h
```
- lolcat已安装完毕，下面可以玩起来了
找一些喜欢的文本写成文件，cat [文件] | lolcat,就可以嗨起来了，写入自己的.bash_profile或者.zshrc中实现打开立即输出

<img src="img/rulai.jpeg" width=500 alt="">
```
$ ps | lolcat
$ date | lolcat
$ cal | lolcat
$ echo I LOVE YOU | lolcat -a -d 20
$ cat [文件] | lolcat
```
- - -
2018.04.26
