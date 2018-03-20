import Vue from 'vue'
import Router from 'vue-router'
import beforeEach from './beforeEach'
import { routes as auth } from 'modules/auth'
import { routes as home } from 'modules/home'
import { routes as user } from 'modules/user'
import { routes as order } from 'modules/order'
// import { routes as policy } from 'modules/policy'
import { routes as shop } from 'modules/shop'
import { routes as period } from 'modules/period'
import { routes as product } from 'modules/product'
import { routes as device } from 'modules/device'
import { routes as system } from 'modules/system'
import { routes as screen } from 'modules/screen'

Vue.use(Router);

const AuthRoute = {
    path: '/auth',
    component: () =>
        import ('modules/auth/Main'),
    redirect: { name: 'auth.login' },
    children: [...auth],
};

const ScreenRoute = {
    path: '/screen',
    component: () =>
        import ('modules/screen/Main'),
    children: [...screen],
};

const AppRoute = {
    path: '/',
    component: () =>
        import ('../App.vue'),
    children: [...home, ...user, ...order, ...shop, ...period, ...product, ...device, ...system],
};

const routes = [AppRoute, AuthRoute, ScreenRoute];

const router = new Router({
    routes,
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
    mode: 'history',
});

router.beforeEach(beforeEach);

export default router