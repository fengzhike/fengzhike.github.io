webpackJsonp([0],{1722:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,r,o=n(2),u=a(o),c=n(64),f=a(c),d=n(4),s=a(d),l=n(9),m=a(l),h=n(7),p=a(h),v=n(8),g=a(v),w=n(0),b=(a(w),n(190)),y=n(654),k=a(y),M=(i=(0,b.wrapper)(k.default))(r=function(e){function t(){return(0,s.default)(this,t),(0,p.default)(this,(t.__proto__||(0,f.default)(t)).apply(this,arguments))}return(0,g.default)(t,e),(0,m.default)(t,[{key:"render",value:function(){return this.props.monkeyKing((0,u.default)({},this.props,{path:"root"}))}}]),t}(w.Component))||r;t.default=M,e.exports=t.default},1723:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=new w.action(e),n=new k((0,o.default)({},e,{metaAction:t})),a=(0,o.default)({},t,n);return t.config({metaHandlers:a}),a}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=a(r),u=n(119),c=a(u),f=n(292),d=a(f),s=n(293),l=a(s),m=n(4),h=a(m);t.default=i;var p=n(0),v=a(p),g=n(191),w=n(190),b=n(642),y=a(b),k=function e(t){var a=this;(0,h.default)(this,e),this.onInit=function(e){var t=e.component,n=e.injections;a.component=t,a.injections=n,n.reduce("init",a.browserRedirect()),a.load()},this.load=(0,l.default)(d.default.mark(function e(){var t;return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.webapi.getMenu){e.next=5;break}return e.next=3,a.webapi.getMenu();case 3:t=e.sent,a.injections.reduce("load",{menu:t});case 5:case"end":return e.stop()}},e,a)})),this.getProfile=function(){return a.config.profile},this.getPhoto=function(){return n(1734)},this.getMenuChildren=function(){var e=a.metaAction.gf("data.menu").toJS();return function e(t){var n=[];return t.forEach(function(t){t.children?n.push(v.default.createElement(g.Menu.SubMenu,{key:t.key,title:t.name},e(t.children))):n.push(v.default.createElement(g.Menu.Item,{key:t.key},t.name))}),n}(e)},this.topMenuClick=function(e){switch(e.key){case"logout":a.component.props.onRedirect&&a.config.goAfterLogout&&(a.metaAction.context.set("user",void 0),a.component.props.onRedirect(a.config.goAfterLogout));break;case"github":window.open("https://github.com/fengzhike/fengzhike.github.io");break;case"gitter":break;case"toggleTabs":a.metaAction.sf("data.isTabsStyle",!a.metaAction.gf("data.isTabsStyle"))}},this.foldMenu=function(){a.metaAction.sf("data.isShowMenu",!a.metaAction.gf("data.isShowMenu")),setTimeout(function(){var e=document.createEvent("HTMLEvents");e.initEvent("resize",!0,!0),window.dispatchEvent(e)},0)},this.browserRedirect=function(){var e=navigator.userAgent.toLowerCase(),t="ipad"==e.match(/ipad/i),n="iphone os"==e.match(/iphone os/i),a="midp"==e.match(/midp/i),i="rv:1.2.3.4"==e.match(/rv:1.2.3.4/i),r="ucweb"==e.match(/ucweb/i),o="android"==e.match(/android/i),u="windows ce"==e.match(/windows ce/i),c="windows mobile"==e.match(/windows mobile/i);return!(t||n||a||i||r||o||u||c)},this.menuClick=function(e){!a.browserRedirect()&&a.metaAction.sf("data.isShowMenu",!1);var t=a.metaAction.gf("data.menu").toJS(),n=function t(n){var a=!0,i=!1,r=void 0;try{for(var o,u=(0,c.default)(n);!(a=(o=u.next()).done);a=!0){var f=o.value;if(f.key==e.key)return f;if(f.children){var d=t(f.children);if(d)return d}}}catch(e){i=!0,r=e}finally{try{!a&&u.return&&u.return()}finally{if(i)throw r}}}(t);n&&a.injections.reduce("setContent",n.appName,n.appParams)},this.metaAction=t.metaAction,this.config=y.default.current,this.webapi=this.config.webapi};e.exports=t.default},1724:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=new d.reducer(e),n=new h((0,o.default)({},e,{metaReducer:t}));return(0,o.default)({},t,n)}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=a(r),u=n(4),c=a(u);t.default=i;var f=n(84),d=n(190),s=n(642),l=a(s),m=n(655),h=function e(t){var n=this;(0,c.default)(this,e),this.init=function(e,t){var a=(0,m.getInitState)();return a.data.isShowMenu=t,e=n.metaReducer.init(e,a),n.config.menu&&!n.config.webapi.getMenu?n.load(e,{menu:n.config.menu}):e},this.load=function(e,t){var a=t.menu;if(!a||0==a.lenght)return e;var i,r,o=[];!function e(t){var n=[];return t.forEach(function(t){t.children?(t.isExpand&&o.push(t),e(t.children)):(r||(r=t),t.isDefault&&(i=t))}),n}(a),i=i||r;var u=(0,f.fromJS)(i?[i.key]:[]),c=(0,f.fromJS)(o.map(function(e){return e.key})),d=(0,f.fromJS)(i||{});return e=n.metaReducer.sf(e,"data.menu",(0,f.fromJS)(a)),e=n.metaReducer.sf(e,"data.menuDefaultSelectedKeys",u),e=n.metaReducer.sf(e,"data.menuDefaultOpenKeys",c),e=n.metaReducer.sf(e,"data.content",d)},this.setContent=function(e,t,a){return e=n.metaReducer.sf(e,"data.content.appName",t),e=n.metaReducer.sf(e,"data.content.appParams",a)},this.metaReducer=t.metaReducer,this.config=l.default.current};e.exports=t.default},1734:function(e,t,n){e.exports=n.p+"photo.ac003cd4.png"}});