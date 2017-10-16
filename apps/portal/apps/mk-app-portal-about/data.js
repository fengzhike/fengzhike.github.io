export function getMeta() {
	return {
		name: 'root',
		component: '::div',
		className: 'mk-app-portal-about',
		children: [{
			name:'about',
			component:'::div',
			children:'{{$getContent()}}'
		}]
	}
}

export function getInitState() {
	return { data: {} }
}
