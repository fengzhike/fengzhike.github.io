# linux&windows常用命令

## linux常用操作命令
```
ls dir -- 列出当前目录的内容
ls -l  -- 显示长格式目录 权限 子目录或文件数量 所属 大小 创建时间 目录或文件名字
ls -a  -- 显示隐藏文件 短格式
cd     -- 进入某目录
cd /   -- 进入根目录
cd ~   -- 进入当前用户桌面
mkdir aa -- 创建aa目录
mkdir aa/bb -p --循环创建目录
touch a -- 新建文件a
rm xx  -- 删除文件xx
rm -r b -- 删除目录b
rm -f  -- 强制删除
rm -rf -- 删除所有内容 -r 递归 -f强制
mv -- 移动文件和重命名
cp a.txt /b/c.txt  --将a.txt复制到/b下面并命名为c
cp -R aa /b/dd    --将目录aa 复制到/b下面并命名为dd
pwd    -- 显示当前目录位置
ln -s  -- 源文件  目标文件  建立软连
clear  -- 清屏
init (0,1,2,3,4,5) -0:关机 -1: 单用户 -2:多用户状态没有网络服务 -3:多用户状态有网络服务 -4:系统未使用，保留给用户 -5:图形界面 -6:系统重启
shutdown -h now  -- 立刻关机
shutdown -r now/reboot  -- 立刻重启计算机
su - root  -- 切换root账户  
sudo    -- 临时以管理员身份操作
logout  -- 用户注销
who am i -- 用户名
cat a   -- 预览a

d目录  (root) r读（4）  w写（2） x执行（1）|(文件所在用户组)rwx |（其他用户组） rwx



```

## windows 常用命令行
```
dir     -- 展示文件夹内容
md aa   -- 创建aa文件夹
cd      -- 进入文件夹
copy a.txt aa    --将a.txt复制到aa
del a.txt --删除文件a.txt
rename a.txt b.txt  --将a.txt重命名为b.txt
mkdir aa -- 创建aa文件夹

```











* * *

2017.10.27
