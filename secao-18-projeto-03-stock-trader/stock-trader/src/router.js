import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from './components/HomeComponent'
import PortfolioComponent from './components/PortfolioComponent'
import MarketStocks from './components/MarketStocks'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        component: HomeComponent
    }, {
        path: '/portfolio',
        component: PortfolioComponent
    }, {
        path: '/acoes',
        component: MarketStocks
    }, {
        path: '*',
        redirect: '/'
    }]
})