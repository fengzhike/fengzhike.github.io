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
			// appName: 'front-end?params=js'
			appName: 'markdown?id=201',
			appParams: { content: mdJsMechanism }

		}, {
			key: '203',
			name: 'css',
			appName: 'front-end?params=css',
			appParams:{}
		},{
			key: '204',
			name: 'less & sass',
			appName: 'front-end?params=less,sass'
		},{
			key: '205',
			name: 'gulp',
			appName: 'front-end?params=gulp'
		},{
			key: '206',
			name: 'webpack',
			appName: 'front-end?params=webpack'
		},{
			key: '207',
			name: 'redux概念解读',
			appName: 'markdown?207',
			appParams: { content: mdRedux }
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
		name:'如何使用markdown',
		appName: 'markdown?id=4',
		appParams: { content: mdHowToUseMarkDown }
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
	},{
		key: '10',
		name: '示例',
		isExpand:false,
		children: [{
			key: '1001',
			name: 'demo列表',
			appName: 'markdown?10',
			appParams: { content: mdProduct }
		}]
	}],
	profile
}

function config(options) {
	if (options) {
		Object.assign(_options, options)
	}
}

config.current = _options

export default config
