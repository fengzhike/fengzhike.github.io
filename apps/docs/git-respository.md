# 如何在服务端搭建一个git仓库

自己搭过几次，每次都是各种度娘，这次有需求，发现又有些地方卡住了，索性记录下来，方便下次查阅
以Ubuntu为例，介绍搭建步骤

## 服务端
1. 创建一个git用户

    ```
    $ sudo useradd -m git //-m 在username的主目录
    $ sudo passwd git //为该账户添加密码
    $ usermod -a -C sudo git //添加该账户到sudo群组，允许该用户安装软件，-a ：添加  -G 一个或多个群组
    $ sudo chsh -s /bin/bash git //将该账户的默认外壳设为bash
    ```

2. 切换到新建的git账户下安装必备软件

    ```
    $ su git // 切换到git账户
    $ sudo apt-get install git openssh-server openssh-client
    ```

3. 在git的/home目录下新建一个.ssh的目录用以存放开发者的公钥文件

    ```
    $ ssh-keygen //生成.ssh目录
    ```

    将开发者的公钥文件按照每行一个，依次放入 .ssh/authorized_keys文件中

    ```
    ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDQeNyQO8BJy+ZhxEIzmooaF8JWiUPZjXEUn+fJYy+ePWPpWZRufRCfXWVMc6O0kox6O2DtzgnZO+YGjKc/zznDg6Ec8OcT7d8YUSmVse0ZsgrClYaW2N6xcXeQyUJAfVx4sG3Uv43gksXE+qXjfcpIgqcgF824n/UB1d9BsRsiaR+DFFISyVqHn2SK6qx/dndbSNLHTmCoF+ElMWaLPqOleckJ+BO7st8QnlA6cHrtaJRxVFCqYzTqRozvUedoSVaPHzcChF6bt86qncbqsbZBonoWyTo4fQW2PoxfCjFp0LD5bUnY9Ekmm7FJGZmNdNaL3WypkxgGewE8N59E2DS9 zs@rrtimes.com
    ```
4. 建立一个空仓库
    ```
    $ sudo mkdir /respositorys/test.git //respositorys:用存放仓库 test.git：项目仓库
    $ cd /respositorys/test.git //进入新建的空仓库
    $ sudo git --bare init   //初始化这个仓库
    $ sudo chown -R git:git /respositorys/test.git 将git仓库的拥有者改为git账户，让git账户拥有控制权
    ```

ok！ git服务端配置完毕


## 客户端
在客户端配置ssh公钥
1. 设置git的user name和email：

    ```
    $ git config --global user.name 'zs'
    $ git config --global user.email 'zs@rrtimes.com'
    ```
    email和服务端authorized_keys中的要对应

2. 生成密钥
    ```
    $ ssh-keygen -t rsa -C 'zs@rrtimes.com'
    ```
    遇到停顿按回车，不要密码

    去.ssh/下面将id_rea.pub里面的内容复制出来，贴到服务端.ssh/authorized_keys，如果用github的话，就是个人中心的还在那个户设置里面的 ssh key里面

3. 开发机上推送原始代码到服务器上

    ```
    $ cd myproject
    $ git init
    $ git add .                #这里选择你需要添加的文件
    $ git commit -m ‘initial commit’
    $ git remote add origin git@ip:/respositorys/test.git
    $ git push origin master
    ```
    也可以直接从服务端获取代码

    ```
    $ git clone git@ip:/respositorys/test.git
    ```

4. 到此为止，服务端和客户端配置完毕，可以耍起来了
*  *  *
2017年10月27日
