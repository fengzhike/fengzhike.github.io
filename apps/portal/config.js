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
			appName: 'mk-app-portal-app1'
		}, {
			key: '203',
			name: 'css',
			appName: 'mk-app-portal-app2'
		},{
			key: '204',
			name: 'less & sass',
			appName: 'mk-app-portal-app2'
		},{
			key: '205',
			name: 'gulp',
			appName: 'mk-app-portal-app2'
		},{
			key: '206',
			name: 'webpack',
			appName: 'mk-app-portal-app2'
		},{
			key: '207',
			name: 'react',
			appName: 'mk-app-portal-app2'
		}]
	}, {
		key: '3',
		name: 'python',
		isExpand:false,
		children: [{
			key: '301',
			name: 'python语法',
			appName: 'mk-app-portal-app1'
		}, {
			key: '302',
			name: 'python类库',
			appName: 'mk-app-portal-app2'
		}]
	}, {
		key: '4',
		name: '机器学习',
		isExpand:false,
		children: [{
			key: '401',
			name: '机器学习概念',
			appName: 'mk-app-portal-app1'
		}, {
			key: '402',
			name: 'NN(神经网络)',
			appName: 'mk-app-portal-app2'
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
