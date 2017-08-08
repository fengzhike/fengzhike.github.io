import profile from './img/profile.jpg'
import webapi from './webapi'

var _options = {
	webapi,
	goAfterLogout: {
		appName: 'mk-app-login',
		appParams: {}
	},
	menu: [{
		key: '1',
		name: '关于',
		appName: 'mk-app-portal-about',
		isDefault: true
	}, {
		key: '2',
		name: '前端学习',
		isExpand:true,
		children: [{
			key: '201',
			name: 'js',
			appName: 'front-end?params=js',
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
			name: 'react',
			appName: 'front-end?params=react'
		}]
	}, {
		key: '3',
		name: 'python',
		isExpand:false,
		children: [{
			key: '301',
			name: 'python语法',
			appName: 'python?params=python_gramar'
		}, {
			key: '302',
			name: 'python类库',
			appName: 'python?params=pythons'
		}]
	}, {
		key: '4',
		name: '机器学习',
		isExpand:false,
		children: [{
			key: '401',
			name: '机器学习概念',
			appName: 'mechine-learning?params=concept'
		}, {
			key: '402',
			name: 'NN(神经网络)',
			appName: 'mechine-learning?params=NN'
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
