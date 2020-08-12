import Vue from "vue";
import Router from "vue-router";
import Layout from "./views/layout/Layout.vue"
import { registerMap } from "echarts";

Vue.use(Router);

export const constantRouterMap=[
  {path:'/login',name:'login', component: () => import(/* webpackChunkName: "public" */ './public/login1.vue'), hidden: true},
  {
    path: '/',
    component: Layout,
    // 登录时默认进入首页
    redirect: '/login',
    noDropdown: true,
    hidden: true,
  },
];

export default new Router({
  scrollBehavior:()=>({y:0}),
  routes:constantRouterMap,
});
const WebRouter=[
  {
    path:'',
    component:Layout,
    redirect:'/dashboard',
    icon:'pindao',
    noDropdown:true,
    children:[
      {path:'dashboard',
       component:()=>import("./views/test/train.vue"),
       meta:{title:'首页'},
       name:'dashboard',
      }
    ]
  },
  {
    path:'/setting',
    component:Layout,
    name:'setting',
    title:'设置中心',
    meta:{title:'设置中心'},
    icon:'pindao',
    redirect:'no-redirect',
    children:[{
      path:'baseSetting',
      name:'baseSetting',
      noCache:true,
      component:null,
      meta:{title:'基础设置'}
      },
      {
        path:'register',
        name:'register',
        noCache:true,
        component:null,
        meta:{title:'注册与访问'}
      },
      {
        path:'email',
        name:'email',
        noCache:true,
        component:null,
        meta:{title:'邮箱设置'},
      },
      {
        path:'store',
        name:'store',
        noCache:true,
        component:null,
        meta:{title:'存储设置'}
      },
      {
        path:'pay',
        name:'pay',
        noCache:true,
        component:null,
        meta:{title:'支付设置'},
      },
      {
        path:'virtual',
        name:'virtual',
        noCache:true,
        meta:{title:'全网虚拟货币设定'}
      },
      {
        path:'virtual-charge',
        name:'virtual-charge',
        noCache:true,
        component:null,
        meta:{title:'虚拟货币充值设置'}
      },
      {
        path:'flexible-price',
        name:'flexible-price',
        noCache:true,
        component:null,
        meta:{title:'弹性定价设置'}
      },
      {
        path:'discount',
        name:'discount',
        noCache:true,
        component:null,
        meta:{title:'满额立减设置'}
      },
      {
        path:'combo',
        name:'combo',
        noCache:true,
        component:null,
        meta:{title:'组合套餐设置'}
      },
      {
        path:'invite',
        name:'invite',
        noCache:true,
        component:null,
        meta:{title:'邀请返还设置'}
      }
    ]
  },
  {
    path:'/business',
    component:Layout,
    name:'business',
    title:'运营中心',
    meta:{title:'运营中心'},
    icon:'pindao',
    redirect:'no-redirect',
    children:[
      {
        path:'user',
        name:'user',
        noCache:true,
        component:()=>import("./views/User/UserCrud.vue"),
        meta:{title:'用户管理'}
      },
      {
        path:'on-sale',
        name:'on-sale',
        noCache:true,
        component:null,
        meta:{title:'上架管理'}
      },
      {
        path:'cache',
        name:'cache',
        noCache:true,
        component:null,
        meta:{title:'预存管理'}
      },
      {
        path:'message',
        name:'message',
        noCache:true,
        component:null,
        meta:{title:'消息管理'}
      },
      {
        path:'help',
        name:'help',
        noCache:true,
        component:null,
        meta:{title:'帮助管理'}
      },
      {
        path:'load-log',
        name:'load-log',
        noCache:true,
        component:null,
        meta:{title:'登录日志'}
      },
      {
        path:'cash',
        name:'cash',
        noCache:true,
        component:null,
        meta:{title:'提现处理'}
      },
    ]
  },
  {
    path:'/finance',
    name:'finance',
    component:Layout,
    icon:'pindao',
    redirect:'no-redirect',
    meta:{title:'财务中心'},
    title:'财务中心',
    children:[
      {
        path:'order',
        name:'order',
        noCache:true,
        component:null,
        meta:{title:'业务订单'}
      },
      {
        path:'charge',
        name:'chaege',
        noCache:true,
        component:null,
        meta:{title:'充值记录'}
      },
      {
        path:'consume',
        name:'consume',
        noCache:true,
        component:null,
        meta:{title:'消费记录'}
      },
      {
        path:'cash-log',
        name:'cash-log',
        noCache:true,
        component:null,
        meta:{title:'返现记录'}
      },
      {
        path:'analyze',
        name:'analyze',
        noCache:true,
        component:null,
        meta:{title:'解析记录'}
      },
      {
        path:'transiform',
        name:'transiform',
        noCache:true,
        component:null,
        meta:{title:'划转记录'}
      }
    ]
  },
  {
    path:'/control',
    name:'control',
    component:Layout,
    icon:'pindao',
    redirect:'no-redirect',
    meta:{title:'主控中心'},
    title:'主控中心',
    children:[
      {
        path:'knot',
        name:'knot',
        noCache:true,
        component:null,
        meta:{title:'节点端管理'}
      },
      {
        path:'website',
        name:'website',
        noCache:true,
        component:null,
        meta:{title:'站点管理'}
      },
      {
        path:'cookie',
        name:'cookie',
        noCache:true,
        component:null,
        meta:{title:'Cookie管理'}
      },
      {
        path:'OSS',
        name:'OSS',
        noCache:true,
        component:null,
        meta:{title:'OSS转存管理'}
      },
      {
        path:'spider-reg',
        name:'spider-reg',
        noCache:true,
        component:null,
        meta:{title:'爬取规则维护'}
      },
      {
        path:'check-api',
        name:'check-api',
        noCache:true,
        component:null,
        meta:{title:'验证API管理'}
      },
      {
        path:'analyze-api',
        name:'analyze-api',
        noCache:true,
        component:null,
        meta:{title:'解析入口配置'}
      },
      {
        path:'tactics',
        name:'tactics',
        noCache:true,
        component:null,
        meta:{title:'集中策略配置'}
      },
      {
        path:'tunnel',
        name:'tunnel',
        noCache:true,
        component:null,
        meta:{title:'代理隧道配置'}
      }
    ]
  },
  {
    path:'/tool',
    name:'tool',
    redirect:'no-redirect',
    meta:{title:'工具'},
    title:'工具',
    icon:'pindao',
    component:Layout,
    children:[{
      path:'caches',
      name:'caches',
      component:null,
      noCache:true,
      meta:{title:'缓存管理'}
    },
    {
      path:'database',
      name:'database',
      noCache:true,
      component:null,
      meta:{title:'数据库管理'}
    },
    {
      path:'statistics',
      name:'statistics',
      noCache:true,
      component:null,
      meta:{title:'访问数据统计'}
    },
    {
      path:'plan',
      name:'plan',
      noCache:true,
      component:null,
      meta:{title:'计划任务'}
    }
  ]
  },
  {
    path: '/dev-tools',
    component: Layout,
    name: 'DevTools',
    title: '开发人员工具',
    icon: 'dev',
    children: [
      {
        path: 'form-designer',
        name: 'FormDesigner',
        component: null,
        meta: { title: '表单设计' },
      },
      {
        path: 'table-designer',
        name: 'TableDesigner',
        component: null,
        meta: { title: '表格设计' },
      },
      {
        path: 'dict-type',
        name: 'DictType',
        component: null,
        meta: { title: '字典类型管理' },
      },
      {
        path: 'dict',
        name: 'Dict',
        component: null,
        meta: { title: '字典管理' },
      },
      {
        path: 'log',
        name: 'Log',
        component: null,
        meta: { title: '系统日志' },
      },

    ],
  },
  // {
  //   path:'/dashboard',
  //   component:Layout,
  //   name:'dashboard',
  //   title:'主页',
  //   meta:{title:'主页'},
  //   icon:'pindao',
  //   redirect:'dashboard/train',
  //   children:[
  //     {
  //       path:'css',
  //       name:'css',
  //       noCache:true,
  //       component:()=>import(/* webpackChunkName : "train"*/ "./views/test/css.vue"),
  //       meta:{title:'css联系'},
  //     },
  //     {
  //       path:'train',
  //       name:'train',
  //       noCache:true,
  //       component:()=>import(/* webpackChunkName : "train"*/ "./views/test/train.vue"),
  //       meta:{title:'trian'},
  //     }
  //   ],
  // }
];
export const asyncRouterMap=WebRouter;