import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import gongyingshangList from '../pages/gongyingshang/list'
import gongyingshangDetail from '../pages/gongyingshang/detail'
import gongyingshangAdd from '../pages/gongyingshang/add'
import peisongyuanList from '../pages/peisongyuan/list'
import peisongyuanDetail from '../pages/peisongyuan/detail'
import peisongyuanAdd from '../pages/peisongyuan/add'
import wuzifenleiList from '../pages/wuzifenlei/list'
import wuzifenleiDetail from '../pages/wuzifenlei/detail'
import wuzifenleiAdd from '../pages/wuzifenlei/add'
import wuzixinxiList from '../pages/wuzixinxi/list'
import wuzixinxiDetail from '../pages/wuzixinxi/detail'
import wuzixinxiAdd from '../pages/wuzixinxi/add'
import wuzigoumaiList from '../pages/wuzigoumai/list'
import wuzigoumaiDetail from '../pages/wuzigoumai/detail'
import wuzigoumaiAdd from '../pages/wuzigoumai/add'
import wuzipeisongList from '../pages/wuzipeisong/list'
import wuzipeisongDetail from '../pages/wuzipeisong/detail'
import wuzipeisongAdd from '../pages/wuzipeisong/add'
import jiankangshangchuanList from '../pages/jiankangshangchuan/list'
import jiankangshangchuanDetail from '../pages/jiankangshangchuan/detail'
import jiankangshangchuanAdd from '../pages/jiankangshangchuan/add'

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
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'gongyingshang',
					component: gongyingshangList
				},
				{
					path: 'gongyingshangDetail',
					component: gongyingshangDetail
				},
				{
					path: 'gongyingshangAdd',
					component: gongyingshangAdd
				},
				{
					path: 'peisongyuan',
					component: peisongyuanList
				},
				{
					path: 'peisongyuanDetail',
					component: peisongyuanDetail
				},
				{
					path: 'peisongyuanAdd',
					component: peisongyuanAdd
				},
				{
					path: 'wuzifenlei',
					component: wuzifenleiList
				},
				{
					path: 'wuzifenleiDetail',
					component: wuzifenleiDetail
				},
				{
					path: 'wuzifenleiAdd',
					component: wuzifenleiAdd
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
					path: 'wuzixinxiAdd',
					component: wuzixinxiAdd
				},
				{
					path: 'wuzigoumai',
					component: wuzigoumaiList
				},
				{
					path: 'wuzigoumaiDetail',
					component: wuzigoumaiDetail
				},
				{
					path: 'wuzigoumaiAdd',
					component: wuzigoumaiAdd
				},
				{
					path: 'wuzipeisong',
					component: wuzipeisongList
				},
				{
					path: 'wuzipeisongDetail',
					component: wuzipeisongDetail
				},
				{
					path: 'wuzipeisongAdd',
					component: wuzipeisongAdd
				},
				{
					path: 'jiankangshangchuan',
					component: jiankangshangchuanList
				},
				{
					path: 'jiankangshangchuanDetail',
					component: jiankangshangchuanDetail
				},
				{
					path: 'jiankangshangchuanAdd',
					component: jiankangshangchuanAdd
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
