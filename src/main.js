import Vue from 'vue'
import App from './App'
// import toast from './packages/lib/toast.vue'
import toast from 'uni-campus/lib/toast.vue'

import { debounce } from 'uni-campus/plugins'

Vue.use(debounce)

Vue.config.productionTip = false

App.mpType = 'app'

Vue.component('toast', toast)

const app = new Vue({
  ...App,
})
app.$mount()
