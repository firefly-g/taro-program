export default defineAppConfig({
  pages: [
    'pages/home/index',
    'pages/category/index',
    'pages/shoppingcart/index',
    'pages/user/index',
  ],
  tabBar:{
    list:[
      {
        text:'首页',
        pagePath:'pages/home/index',
        iconPath:'static/images/tabbar/home.png',
        selectedIconPath:'static/images/tabbar/home-active.png'
      },{
        text:'分类',
        pagePath:'pages/category/index',
        iconPath:'static/images/tabbar/category.png',
        selectedIconPath:'static/images/tabbar/category-active.png'
      },{
        text:'购物车',
        pagePath:'pages/shoppingcart/index',
        iconPath:'static/images/tabbar/cart.png',
        selectedIconPath:'static/images/tabbar/cart-active.png'
      },{
        text:'我的',
        pagePath:'pages/user/index',
        iconPath:'static/images/tabbar/user.png',
        selectedIconPath:'static/images/tabbar/user-active.png'
      },
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
