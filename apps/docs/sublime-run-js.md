# sublime 内运行javascript

## 添加build system

- 在sublime text中依次打开Tools -> Build System -> New Build System... 粘贴以下代码后保存(如Node.sublime-build), 然后把Build System设成Automatic
	
	```json
	{
	    "cmd": ["node", "--use-strict", "--harmony", "$file"],
	    "selector": "source.js"
	}
	```

## 说明

- 在以上的build文件中(Node.sublime-build), node是执行命令, --harmony和--use-strict是执行参数, $file是当前文件名, 所以一次build操作实际上相当于在命令行中执行了node --use-strict --harmony filename. --harmony表示启用ES Harmony features, 而这些features目前只能在strict模式下运行, 所以需要同时添加use-strict参数(详见what-is-extended-mode).

- 如果不想启用es6的特性,把build文件更改成以下代码保存即可.
	```json
	{
	    "cmd": ["node", "$file"],
	    "selector": "source.js"
	}
	```