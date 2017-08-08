import config from './config'
import * as data from './data'

export default {
	name: "mk-app-root-helloWorld",
	version: "1.0.0",
	description: "mk-app-root-helloWorld",
	meta: data.getMeta(),
	components: [],
	config: config,
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'), require('./action'), require('./reducer'))
		}, "mk-app-root-helloWorld")
	}
}