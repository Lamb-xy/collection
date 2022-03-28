// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import createAHelp from '../pages/createAHelp.vue'
import HelpMall from '../pages/HelpMall.vue'
import MyHelp from '../pages/MyHelp.vue'
import UserInfo from '../pages/UserInfo.vue'

//创建并暴露一个路由器
export default new VueRouter({
	routes: [
		{
			path: '/createAHelp',
			component: createAHelp,
		},
		{
			path: '/HelpMall',
			component: HelpMall,
        },
		{
			path: '/HelpMall',
			component: MyHelp,
        },
		{
			path: '/UserInfo',
			component: UserInfo,
        },
    ]
})
