import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import wuzixinxiList from '../pages/wuzixinxi/list'
import wuzixinxiDetail from '../pages/wuzixinxi/detail'
// import wuzigoumaiDetail from '../pages/wuzigoumai/detail'
import wuzigoumaiAdd from '../pages/wuzigoumai/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'wuzixinxi',
					component: wuzixinxiList
				},
				{
					path: 'wuzixinxiDetail',
					component: wuzixinxiDetail
				},
				{
					path: 'wuzigoumaiAdd',
					component: wuzigoumaiAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
