import Vue from 'vue'
import Router from 'vue-router'
import { domain, fromNow } from './filters'

import App from './components/App.vue'


import IndexView from './components/IndexView.vue'
import Page1View from './components/Page1View.vue'
import Page2View from './components/Page2View.vue'


import store from './store/store.js'

// install router
Vue.use(Router)

// register filters globally
Vue.filter('fromNow', fromNow)
Vue.filter('domain', domain)




// routing
var router = new Router()

router.map({
  '/': {
    component: IndexView
  },
  /*'/signup': {
    component: SignUpView
  },*/
  '/page1': {
    component: Page1View
  },
  '/page2': {
    component: Page2View
  }
})

router.beforeEach(function () {
  window.scrollTo(0, 0);
  
  
})



router.redirect({
  '*': '/'
})

router.start(App, '#app')
