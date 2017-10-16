
# 一.什么是Redux
## Redux是Flux的一种演变，子集，或者是一种具体实现
在Flux中：Action --> Dispather ---> Store存储 --->视图

Flux利用Dispather把产生的action发送到数据存储中，是广播类型，store中关心此action的处理函数来改变对应的state并更新视图
Store对外只暴露getter，不允许提供setter！！禁止在任何地方直接操作Store。  只能由Dispather分发action，在state中更改

Redux中没有Dispather，当每次Action被激活需要dispatch时，使用一个函数称为reducer来返回新的应用状态。

## Redux工作原理
它使用一个函数为reducer (这个名词是来自于Javasctip的 reduce 方法) ，只需要两个参数：一个动作action和下一个状态

　　Reducer函数能够访问当前状态，将动作应用到状态，返回下一个符合业务的状态，这是一种状态模式实现。

　　Reducer设计为纯函数，也就是说，它们没有副作用，如果你传送同样的值给它，哪怕几百次，总是会得到同样的值，什么改变也没有发生，这就让人感觉更加确定性，也就是可预期性的。

　　Reducer并不存储状态，只传递状态，返回状态，这使得它看上去也像动作Action。

# Redux用法
首先需要明白 Redux 的单一状态树的概念，所谓的单一状态树，就是指“所有的 state 都以一个对象树的形式储存在一个单一的 store 中。”

## 比如我们有这么一个状态树（或者你叫它状态对象也行）:

>   {
	    text : 'Hello world'
    }

* 这个状态树就只有一个节点 text，可以用来描述页面中某个文本的内容，比如说一个p标签：
> 	<p> Hello world </p>
* 当我们把状态树改变之后，比如：
>    	{
    		text : 'Hello Stark'
		 }

那么p标签也要改变：
>    <p> Hello Stark </p>

* 页面中的所有状态or数据，都应该用这种状态树的形式来描述；页面上的任何变化，都应该先去改变这个状态树，然后再通过某种方式实现到页面上,
* 或者换句话说，我们要做的核心工作，就是用单个对象去描述页面的状态，然后通过改变这个对象来操控页面。

## Action
*　把 text 从 “Hello world” 变成了 “Hello Stark” ，那么我们应该用一个 Action 对象来描述
>	 function changeText(){
        return {
            type: 'CHANGE_TEXT',//名称
            payload: 'Hello Stark'//携带信息
        }
    }

* Action Creator
View 要发送多少种消息，就会有多少种 Action。如果都手写，会很麻烦。可以定义一个函数来生成 Action，这个函数就叫 Action Creator。

>    	const CHANGE_TEXT = 'CHANGE_TEXT';
	   function changeText(text) {
		  return {
		    type: CHANGE_TEXT,
		    text
		  }
		}

>		
		const action = changeText('Hello Stark');

这个函数会返回一个 Action 对象，这个对象里描述了“页面发生了什么”。随后这个对象会被传入到 Reducer 中。

## Reducer
* Reducer 的任务是根据传入的 Action 对象去修改状态树。
* Store 收到 Action 以后，必须给出一个新的 State，这样 View 才会发生变化。这种 State 的计算过程就叫做 Reducer
>      const reducer = function (state, action) {
		  // ...
		  return new_state;
		};

 根据传入的 当前state 和 action ，返回一个新的 state

	>     (state, action) => newState

Reducer实现：
>    	const initialState = {
		    text : 'Hello world'
		}
>
		function Reducer(state=initialState, action) {
		    switch(action.type) {
		        case 'CHANGE_TEXT':
		            return {
		                text : 'Hello Stark'
		            }
		        default:
		            return state;
		    }
		}

为什么这个函数叫做 Reducer 呢？因为它可以作为数组的reduce方法的参数。一系列 Action 对象按照顺序作为一个数组。

## Store
* Store 就是把 Reducer 和 action 联系到一起的对象
	1. 维持应用的 state；
	2. 提供 getState() 方法获取 state；
	3. 提供 dispatch(action) 方法更新 state；
	4. 通过 subscribe(listener) 注册监听器；

* 创建store
>     import { createStore } from 'redux'
>
		//这里的 Reducer 就是刚才的 Reducer 函数
		let store = createStore(Reducer,[init_state]);
* createStore接受 Reducer 作为参数，生成一个新的 Store。以后每当store.dispatch发送过来一个新的 Action，就会自动调用 Reducer，得到新的 State。
* 然后你可以通过 dispatch 一个 action 来让它改变状态：
>     store.dispatch( changeText() );
	  store.dispatch({
	  	type: 'CHANGE_TEXT',//名称
	    payload: 'Hello Stark'//携带信息
	  });
>
	  store.getState(); // { text : 'Hello Stark' }`

* store.subscribe()
>     import { createStore } from 'redux';
	  const store = createStore(reducer);
>
	  store.subscribe(listener);

只要把 View 的更新函数（对于 React 项目，就是组件的render方法或setState方法）放入listen，就会实现 View 的自动渲染。
store.subscribe方法返回一个函数，调用这个函数就可以解除监听。

>		let unsubscribe = store.subscribe(() =>
		  console.log(store.getState())
		);
>
		unsubscribe();

# 中间件
* Reducer：纯函数，只承担计算 State 的功能，不合适承担其他功能，也承担不了，因为理论上，纯函数不能进行读写操作。
* View：与 State 一一对应，可以看作 State 的视觉层，也不合适承担其他功能。
* Action：存放数据的对象，即消息的载体，只能被别人操作，自己不能进行任何操作。

## 改写store的dispatch 加入中间件

		let next = store.dispatch;
		store.dispatch = function dispatchAndLog(action) {
		  console.log('dispatching', action);
		  next(action);
		  console.log('next state', store.getState());
		}
* eg 生成日志中间件logger (项目中有用)

		import { applyMiddleware, createStore } from 'redux';
		import createLogger from 'redux-logger';
		const logger = createLogger();

		const store = createStore(
		  reducer,
		  init_state,
		  applyMiddleware(logger)
		);

# UI组件和容器组件
* UI组件	：存组件---给什么数据展示什么
* 容器组件：业务逻辑，状态，Redux Api
UI 组件负责 UI 的呈现，容器组件负责管理数据和逻辑。UI 组件都由用户提供，容器组件则是由 React-Redux 自动生成

# Connect
React-Redux 提供connect方法，用于从 UI 组件生成容器组件。connect的意思，就是将这两种组件连起来。

		import { connect } from 'react-redux'
		const VisibleTodoList = connect()(TodoList);
TodoList是 UI 组件，VisibleTodoList就是由 React-Redux 通过connect方法自动生成的容器组件。
* 容器组件需要接受两个信息  i/o

 	    i 输入逻辑：外部的数据（即state对象）如何转换为 UI 组件的参数
 	    o 输出逻辑：用户发出的动作如何变为 Action 对象，从 UI 组件传出去。

		import { connect } from 'react-redux'

		const VisibleTodoList = connect(
		  mapStateToProps,
		  mapDispatchToProps
		)(TodoList)

* mapStateToProps
根据state变化改变ui组件的props

* mapDispatchToProps
操作应该当作 Action，传给 Store。它可以是一个函数，也可以是一个对象
		const mapDispatchToProps = {
		  onClick: (filter) => {
		    type: 'SET_VISIBILITY_FILTER',
		    filter: filter
		  };
		}

# Provider
connect方法生成容器组件以后，需要让容器组件拿到state对象，才能生成 UI 组件的参数。
一种解决方法是将state对象作为参数，传入容器组件。但是，这样做比较麻烦，尤其是容器组件可能在很深的层级，一级级将state传下去就很麻烦。

React-Redux 提供Provider组件，可以让容器组件拿到state。

		import { Provider } from 'react-redux'
		import { createStore } from 'redux'
		import todoApp from './reducers'
		import App from './components/App'

		let store = createStore(todoApp);

		render(
		  <Provider store={store}>
		    <App />
		  </Provider>,
		  document.getElementById('root')
		)
上面代码中，Provider在根组件外面包了一层，这样一来，App的所有子组件就默认都可以拿到state了。原理类似于上下文
# Redux_todo Demo

>  https://github.com/fengzhike/redux_todu.git
