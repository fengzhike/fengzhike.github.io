import config from './config'
import * as data from './data'

export default {
	name: "front-end",
	version: "1.0.0",
	description: "front-end",
	meta: data.getMeta(),
	components: [],
	config: config,
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'), require('./action'), require('./reducer'))
		}, "front-end")
	}
}