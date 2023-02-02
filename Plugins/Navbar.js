export default [
  {
    name: 'داشبورد',
    path: '/',
    icon: require('@/assets/img/dashboard.png')
  },
  {
    name: 'سفارش ها',
    path: '/Orders',
    icon: require('@/assets/img/cart.png')
  },
  {
    name: 'پست ها',
    path: '/Posts',
    icon: require('@/assets/img/payments.png'),
    subMenu: {
      name: 'پست جدید',
      path: '/NewPost',
      icon: require('@/assets/img/payments.png'),
    }
  },
  {
    name: 'تیکت ها',
    path: '/Tickets',
    icon: require('@/assets/img/tickets.png')
  },
  {
    name: 'تنظیمات',
    path: '/',
    icon: require('@/assets/img/setting.png')
  },
  {
    name: 'خروج',
    path: '/',
    icon: require('@/assets/img/logout.png')
  }
]
