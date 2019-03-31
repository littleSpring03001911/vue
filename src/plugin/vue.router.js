import Vue from "vue"

import Router from "vue-router"


Vue.use(Router)

import Home from "../components/Home"
import Follow from "../components/Follow"
import Detail from "../components/Detail"
import Column from "../components/Column"
import Reg from "../components/Reg"
import Login from "../components/Login"
import User from "../components/User"
import Err from "../common/AppError"

let routes=[
    {path:"/home",component:Home},
    {path:"/",component:Home},
    {path:"/follow",component:Follow},
    {path:"/detail",component:Detail,
     children:[{name:"detail",path:"/detail/:id",component:Detail}]
    },
    {path:"/user",component:User},
    {path:"/column",component:Column},
    {path:"/reg",component:Reg},
    {path:"/login",component:Login},
    {path:"*",component:Err},
    
]

let router=new Router({
    routes,
    mode:"history"
})


export default router