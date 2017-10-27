# ubuntu apache2配置

## 一、安装Apache2

* 1.Ctrl+Alt+T打开终端，使用apt-get下载

    ```
    $ sudo apt-get install apache2
    ```
    当停顿提示时输 y

* 2.安装完成，重启Apache服务

    ```
    $ sudo /etc/init.d/apache2 restart
    ```
## 二、配置Apache2

* 1.进入目录/etc/apache2

    ```
    $ cd /etc/apache2
    ```
* 2.编辑apache2.conf

    ```
    $ sudo vim apache2.conf
    ```
    在尾部加入下面一段话

        ServerName localhost:80
        #防止最后开启apache2服务的时候会提示DNS出错

        DirectoryIndex index.html index.htm index.php
        #设置默认打开文件

        AddDefaultCharest GB2312
        #防止中文乱码

## 输入localhost 出现默认页面即配置成功




























* * *
2017.10.27
