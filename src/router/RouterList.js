import WithLoading from '../utils/WithLoading'

const Home = WithLoading(() => import('../views/Home'))
const Search = WithLoading(() => import('../views/Search'))
const City = WithLoading(() => import('../views/City'))
const Detail = WithLoading(() => import('../views/Detail'))
const Login = WithLoading(() => import('../views/Login'))
const Dianying = WithLoading(() => import('../views/home/Dianying'))
const Yingyuan = WithLoading(() => import('../views/home/Yingyuan'))
const My = WithLoading(() => import('../views/home/My'))
const Reying = WithLoading(() => import('../views/home/dianying/Reying'))
const Shangying = WithLoading(() => import('../views/home/dianying/Shangying'))


const RouterList = [
    {
        path: "/home",
        component: Home,
        children: [
            {
                path: "/home/dianying",
                component: Dianying,
                children: [
                    {
                        path: "/home/dianying/reying",
                        component: Reying
                    },
                    {
                        path: "/home/dianying/shangying",
                        component: Shangying
                    },
                    {
                        redirect: "/home/dianying/reying"
                    }
                ]
            },
            {
                path: "/home/yingyuan",
                component: Yingyuan
            },
            {
                path: "/home/my",
                component: My
            },
            { redirect: "/home/dianying" }
        ]
    },
    {
        path: "/detail/:id",
        component: Detail
    },
    {
        path: "/login",
        component: Login
    },{
        path: "/city",
        component: City
    },{
        path: "/search",
        component: Search
    },
    { redirect: "/home" }
]

export default RouterList