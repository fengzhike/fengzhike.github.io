import { config, start, componentFactory } from 'mk-meta-engine'
import * as mkComponents from 'mk-component'
import myConfig  from './config'

import markdown from './apps/markdown/index.js'
import front_end from './apps/portal/apps/front-end/index.js'
import mechine_learning from './apps/portal/apps/mechine-learning/index.js'
import mk_app_portal_about from './apps/portal/apps/mk-app-portal-about/index.js'
import python from './apps/portal/apps/python/index.js'
import mk_app_portal from './apps/portal/index.js'
import mk_app_root_about from './apps/root/apps/mk-app-root-about/index.js'
import mk_app_root_helloWorld from './apps/root/apps/mk-app-root-helloWorld/index.js'
import mk_app_root from './apps/root/index.js'

const apps = {
		
	[markdown.name]: markdown,	
	[front_end.name]: front_end,	
	[mechine_learning.name]: mechine_learning,	
	[mk_app_portal_about.name]: mk_app_portal_about,	
	[python.name]: python,	
	[mk_app_portal.name]: mk_app_portal,	
	[mk_app_root_about.name]: mk_app_root_about,	
	[mk_app_root_helloWorld.name]: mk_app_root_helloWorld,	
	[mk_app_root.name]: mk_app_root,
}

apps.config = (options) => {
	Object.keys(options).forEach(key => {
		const reg = new RegExp(`^${key == '*' ? '.*' : key}$`)
		Object.keys(apps).forEach(appName => {
			if (appName != 'config') {
				if (reg.test(appName)) {
					apps[appName].config(options[key])
				}
			}
		})
	})
}

apps.config({ '*': { apps } })

config(myConfig({ apps }))

Object.keys(mkComponents).forEach(key=>{
	componentFactory.registerComponent(key, mkComponents[key])
})
	
start()