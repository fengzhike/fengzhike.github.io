import React from 'react'
import { action as MetaAction, AppLoader } from 'mk-meta-engine'
import config from './config'

class action {
    constructor(option) {
        this.metaAction = option.metaAction
        this.config = config.current
    }


    getContent = ()=>{
        return (
            <div>
            <header style={{'marginBottom':'20px'}}>
                <h2 style={{'textAlign':'center','margin':'10px 0'}}>简言</h2>
                <p>转眼间，从事开发也有几年了。在学习和开发中，时常会有偶得的喜悦，却没有及时记录下来，留下了不少惋惜。开始这篇日志算是亡羊补牢吧，愿从今记录下所经历的点滴</p>
                <p style={{'margin':'10px 0'}}>苏轼的定风波镇楼，这是我最喜欢的一首词</p>

            </header>
            <section style = {{'textAlign':'center'}}>
                <h3>定风波·三月七日</h3>
                <h6>--苏轼</h6>
                <p><i>三月七日，沙湖道中遇雨。雨具先去，同行皆狼狈，余独不觉。已而遂晴，故作此。</i></p>
                <p>
                莫听穿林打叶声，何妨吟啸且徐行。<br/>竹杖芒鞋轻胜马，谁怕？一蓑烟雨任平生。<br/>
                料峭春风吹酒醒，微冷，山头斜照却相迎。<br/>回首向来潇瑟处，归去，也无风雨也无晴。
                </p>
            </section>
            <hr/>
            <section>
                <h3>关于本博客</h3>
                <p>本博客技术栈：react, redux, immutable,antd,nodejs,hapi,sequelize, node-zookeeper-dubbo</p>
                <p>本博客基于<strong>mk-js</strong>(<a href = "https://ziaochina.github.io/mk-docs/"  target="_blank">https://ziaochina.github.io/mk-docs/</a>)框架</p>
                <div>
                    <h3><strong>mk-js</strong>简介</h3>
                    <p>
                        mk = Monkey King = 齐天大圣 <br/>
                        mk系列是一套完整的前、后台解决方案 <br/>
                        <strong>欢迎satr</strong>
                    </p>
                    <h3>特点</h3>
                    <p>
                    将网站分成多个独立app，每个app开发模式完全一致，并且可以克隆npmjs发布模板app<br/>
                    将后台服务分成多个独立service, 每个servie开发模式完全一致， 并且可以克隆npmjs发布的模板service<br/>
                    开发者自己做的app，service可以发布到npmjs开源给其他开发者使用，成为一个生态化的框架
                    </p>

                </div>

            </section>

        </div>
        )
    }
    onInit = ({ component, injections }) => {
        this.component = component
        this.injections = injections
        injections.reduce('init')
    }
}

export default function creator(option) {
    const metaAction = new MetaAction(option),
        o = new action({ ...option, metaAction }),
        ret = { ...metaAction, ...o }

    metaAction.config({ metaHandlers: ret })

    return ret
}
