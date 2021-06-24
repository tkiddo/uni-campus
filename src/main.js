import Vue from 'vue'
import App from './App'
// import toast from './packages/lib/toast.vue'
import toast from 'uni-campus/components/toast.vue'

import { debounce } from 'uni-campus/plugins'

import uView from 'uview-ui'

Vue.use(debounce)
Vue.use(uView)

Vue.config.productionTip = false

App.mpType = 'app'

Vue.component('toast', toast)

const app = new Vue({
  ...App,
})
app.$mount()
