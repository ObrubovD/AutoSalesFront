import Vue from 'vue';
import Router from 'vue-router';

import Catalog from '../components/Catalog';
import Cart from '../components/Cart';
import Home from '../components/Home';
import About from '../components/About';
import OrderDetails from '../components/OrderDetails';
import OrderFinish from '../components/OrderFinish';

Vue.use(Router);

export default new Router({
    routes: [
      {
        path: '/Catalog',
            name: 'Catalog',
            component: Catalog,
      },
      {
        path: '/Cart',
            name: 'Cart',
            component: Cart,
            props: true
      },
      {
        path: '/',
            name: 'Home',
            component: Home,
      },
      {
        path: '/About',
            name: 'About',
            component: About,
      },
      {
        path: '/OrderDetails',
            name: 'OrderDetails',
            component: OrderDetails,
      },
      {
        path: '/OrderFinish',
            name: 'OrderFinish',
            component: OrderFinish,
      },
    ],
  });
