import React from 'react'
import { Menu } from 'mk-component'
import { action as MetaAction, AppLoader } from 'mk-meta-engine'
import config from './config'

class action {
    constructor(option) {
        this.metaAction = option.metaAction
        this.config = config.current
        this.webapi = this.config.webapi
    }

    onInit = ({ component, injections }) => {
        this.component = component
        this.injections = injections
        injections.reduce('init')

        this.load()
    }

    load = async () => {
        if (this.webapi.getMenu) {
            const menu = await this.webapi.getMenu()
            this.injections.reduce('load', {menu})
        }
    }

    getProfile = () => this.config.profile

    getPhoto = () => require('./img/photo.png')

    getMenuChildren = () => {
        const menu = this.metaAction.gf('data.menu').toJS()
        const loop = (children) => {
            const ret = []
            children.forEach(child => {

                if (!child.children) {
                    ret.push(<Menu.Item key={child.key}>{child.name}</Menu.Item>)
                }
                else {
                    ret.push(<Menu.SubMenu key={child.key} title={child.name}>{loop(child.children)}</Menu.SubMenu>)
                }
            })
            return ret
        }
        return loop(menu)
    }

    topMenuClick = (e) => {
        switch (e.key) {
            case 'logout':
                if (this.component.props.onRedirect && this.config.goAfterLogout) {
                    this.metaAction.context.set('user', undefined)
                    this.component.props.onRedirect(this.config.goAfterLogout)
                }
                break;
            case 'github':
                window.open('https://github.com/fengzhike/fengzhike.github.io')
                break;
            case 'gitter':
                // window.open('https://gitter.im/mk-js/mk-js?utm_source=share-link&utm_medium=link&utm_campaign=share-link')
                break;
            case 'toggleTabs':
                this.metaAction.sf('data.isTabsStyle', !this.metaAction.gf('data.isTabsStyle'))
                break;
        }
    }
    
    foldMenu = ()=>{
        this.metaAction.sf('data.isShowMenu', !this.metaAction.gf('data.isShowMenu'))
        setTimeout(function () {
            var event = document.createEvent('HTMLEvents')
            event.initEvent("resize", true, true)
            window.dispatchEvent(event)
        }, 0)
    }

    menuClick = (e) => {

        const menu = this.metaAction.gf('data.menu').toJS()
        const find = (children) => {
            for (let child of children) {
                if (child.key == e.key) {
                    return child
                }

                if (child.children) {
                    let o = find(child.children)
                    if (o) return o
                }
            }
        }

        const hit = find(menu)
        if (hit) {
            this.injections.reduce('setContent', hit.appName, hit.appParams)
        }
    }
}

export default function creator(option) {
    const metaAction = new MetaAction(option),
        o = new action({ ...option, metaAction }),
        ret = { ...metaAction, ...o }

    metaAction.config({ metaHandlers: ret })

    return ret
}
