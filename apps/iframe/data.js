export function getMeta() {
	return {
		name: 'root',
		component: '::div',
		className:'iframe-root',
		children: [{
			name: 'iframe',
			component: '::iframe',
			className:'iframe-content',
			frameborder:0,
			width:'100%',
			height:'100%',
			src:'{{data.src}}'

		}]
	}
}

export function getInitState() {
	return {
		data: {
			src: ''
		}
	}
}
