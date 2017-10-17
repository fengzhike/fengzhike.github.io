export function getMeta() {
	return {
		name: 'root',
		component: 'Layout',
		className: 'mk-app-portal',
		children: [{
			name: 'header',
			component: 'Layout',
			className: 'mk-app-portal-header',
			children: [{
				name: 'left',
				component: 'Layout',
				_visible: '{{data.isShowMenu}}',
				className: 'mk-app-portal-header-left',
				children: [{
					name: 'logo',
					component: '::img',
					className: 'mk-app-portal-header-left-profile',
					src: '{{$getProfile()}}'
				}, {
					name: 'siteName',
					component: '::h1',
					children: 'Shun-Kai'
				}]
			}, {
				name: 'right',
				component: 'Layout',
				className: 'mk-app-portal-header-right',
				children: [{
					name: 'foldMenu',
					component: 'Icon',
					type: `{{data.isShowMenu ? 'menu-fold': 'menu-unfold'}}`,
					title: `{{data.isShowMenu ? '收起菜单': '展开菜单'}}`,
					showStyle: 'showy',
					style: { fontSize: 20 },
					onClick: '{{$foldMenu}}'
				},{
					name:'title',
					component:'::h2',
					children:'Shun-Kai的网络日志'
				},{
					name: 'topMenu',
					component: 'Menu',
					mode: 'horizontal',
					// theme: 'dark',
					style: { backgroundColor: '#fff' },
					onClick: '{{$topMenuClick}}',
					selectedKeys: [],
					children: [/*{
						name: 'gitter',
						component: 'Menu.Item',
						key: 'gitter',
						children: [{
							name: 'icon',
							component: 'Icon',
							type: 'smile-o'
						}, '聊天']
					},*/ {
						name: 'github',
						component: 'Menu.Item',
						key: 'github',
						children: [{
							name: 'icon',
							component: 'Icon',
							type: 'github'
						}, '源代码']
					}]
				}]
			}]
		}, {
			name: 'content',
			component: 'Layout',
			className: 'mk-app-portal-content',
			children: [{
				name: 'left',
				component: 'Layout',
				className: 'mk-app-portal-content-left',
				_visible: '{{data.isShowMenu}}',
				children: [{
					name: 'menu',
					component: 'Menu',
					mode: 'inline',
					theme: 'dark',
					defaultSelectedKeys: "{{data.menuDefaultSelectedKeys}}",
					defaultOpenKeys: "{{data.menuDefaultOpenKeys}}",
					onClick: '{{$menuClick}}',
					children: '{{$getMenuChildren()}}'
				}]
			}, {
				name: 'main',
				component: 'Layout',
				className: 'mk-app-portal-content-main',
				_visible: '{{!!data.content.appName}}',
				children: {
					name: 'app',
					component: 'AppLoader',
					appName: '{{data.content.appName}}',
					'...': '{{data.content.appParams}}'
				}
			}]
		}]
	}
}

export function getInitState() {
	return {
		data: {
			menu: [],
			menuDefaultSelectedKeys: [],
			menuDefaultOpenKeys: [],
			isShowMenu: true
		}
	}
}
