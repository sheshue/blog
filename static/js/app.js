require('./bootstrap')

import Vue from 'vue'
// import router from './router'
import Root from "./Root"

new Vue({
    // store, // injects the Store into all components
    // router, // make Router work with the application
    el: '#app',
    render: h => h(Root)
})
