// import logo from './img/logo.png'
import profile from './img/profile.jpg'
import webapi from './webapi'
import { componentFactory } from 'mk-meta-engine'
import { fetch } from 'mk-utils'

import Markdown from '../components/markdown'

import mdFrontEnd from '../docs/front-end.md'
import mdRedux from '../docs/redux.md'
import mdSublimeMarkdown from '../docs/sublime-markdown.md'
import mdSublimeRunJs from '../docs/sublime-run-js.md'
import mdJsMechanism from '../docs/js-mechanism.md'
import mdMachineLearning from '../docs/machine-learning.md'
import mdNN from '../docs/NN.md'
import mdProduct from '../docs/product.md'
import mdHowToUseMarkDown from '../docs/HowToUseMarkDown.md'
import mdDomainGitpage from '../docs/domain-gitpage.md'
import mdFucntionalprogramming from '../docs/fucntionalprogramming.md'
import mdGitRespository from '../docs/git-respository.md'
import mdUbuntuApache2 from '../docs/ubuntu-apache2.md'
import mdLinuxWindows from '../docs/linux-windows.md'
import mdKarmaPhantom from '../docs/karma-phantom.md'
import mdBackstop from '../docs/backstop.md'
import mdKarmaSystemGulp from '../docs/karma-system-gulp.md'
import mdFrontEndJiCheng from '../docs/front-end-chixujicheng.md'
import mdModule from '../docs/module-description.md'
import mdWebpack from '../docs/webpack.md'


//元数据引擎注册markdown组件
componentFactory.registerComponent('Markdown', Markdown)


var _options = {
	webapi,
	goAfterLogout: {
		appName: 'mk-app-login',
		appParams: {}
	},
	menu: [{
		key: '1',
		name: 'about',
		appName: 'mk-app-portal-about',
		isDefault: true
	}, {
		key: '2',
		name: '前端学习',
		isExpand:true,
		children: [{
			key: '201',
			name: 'js运行机制',
			appName: 'markdown?id=201',
			appParams: { content: mdJsMechanism }
		}, {
			key:'202',
			name:'函数式编程',
			appName: 'markdown?id=202',
			appParams: { content: mdFucntionalprogramming }
		},{
			key:'203',
			name:'在服务器搭建一个git仓库',
			appName: 'markdown?id=203',
			appParams: { content: mdGitRespository }
		},{
			key:'204',
			name:'ubuntu apache2配置',
			appName: 'markdown?id=204',
			appParams: { content: mdUbuntuApache2 }
		},{
			key:'205',
			name:'karma-phantom自动化测试',
			appName: 'markdown?id=205',
			appParams: { content: mdKarmaPhantom }
		},{
			key:'206',
			name:'karma-system-gulp自动化测试工程',
			appName: 'markdown?id=206',
			appParams: { content: mdKarmaSystemGulp }
		},{
			key:'207',
			name:'backstop自动化样式回归测试',
			appName: 'markdown?id=207',
			appParams: { content: mdBackstop }
		},{
			key: '208',
			name: 'redux概念解读',
			appName: 'markdown?208',
			appParams: { content: mdRedux }
		},{
			key: '209',
			name: '前端持续集成',
			appName: 'markdown?209',
			appParams: { content: mdFrontEndJiCheng }
		},{
			key: '210',
			name: '模块化简述',
			appName: 'markdown?210',
			appParams: { content: mdModule }
		},{
			key: '211',
			name: 'webpack从入门到放弃',
			appName: 'markdown?211',
			appParams: { content: mdWebpack }
		}]
	},{
		key:'5',
		name:'linux',
		children:[{
			key:'501',
			name:'linux&windows常用命令',
			appName:'markdown?501',
			appParams:{content:mdLinuxWindows}
		}]

	},{
		key:'3',
		name:'常用工具',
		isExpand:false,
		children:[{
			key:'301',
			name:'Sublime中预览markdown',
			appName: 'markdown?id=301',
			appParams: { content: mdSublimeMarkdown }
		},{
			key:'302',
			name:'Sublime中运行js',
			appName: 'markdown?id=302',
			appParams: { content: mdSublimeRunJs }
		}]
	} ,{
		key:'4',
		name:'其他',
		children:[{
			key:'401',
			name:'如何使用Markendown',
			appName: 'markdown?id=401',
			appParams: { content: mdHowToUseMarkDown }
		},{
			key:'402',
			name:'将域名解析到自己的git博客',
			appName: 'markdown?id=402',
			appParams: { content: mdDomainGitpage }
		}]

	},{
		key: '8',
		name: 'python',
		isExpand:false,
		children: [{
			key: '801',
			name: 'python语法',
			appName: 'python?params=python_gramar'
		}, {
			key: '802',
			name: 'python类库',
			appName: 'python?params=pythons'
		}]
	}, {
		key: '9',
		name: '机器学习',
		isExpand:false,
		children: [{
			key: '901',
			name: '机器学习概念',
			appName: 'markdown?id=901',
			appParams: { content: mdMachineLearning }
		}, {
			key: '902',
			name: 'NN(神经网络)',
			appName: 'markdown?id=902',
			appParams: { content: mdNN }
		}]
	}/*,{
		key: '10',
		name: '示例',
		isExpand:false,
		children: [{
			key: '1001',
			name: 'demo列表',
			appName: 'markdown?10',
			appParams: { content: mdProduct }
		},{
			key:'1002',
			name:'扫雷',
			appName:'iframe?mine'
		}]
	}*/],
	profile
}

function config(options) {
	if (options) {
		Object.assign(_options, options)
	}
}

config.current = _options

export default config
