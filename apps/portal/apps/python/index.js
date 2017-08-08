import config from './config'
import * as data from './data'

export default {
	name: "python",
	version: "1.0.0",
	description: "python",
	meta: data.getMeta(),
	components: [],
	config: config,
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'), require('./action'), require('./reducer'))
		}, "python")
	}
}