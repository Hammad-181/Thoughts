import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
const { fontsize } = require('./directives/CustomDirective')
import MyPlugins from '@/plugins/MyPlugins'
import "bootstrap/dist/css/bootstrap.min.css"


// createApp(App).use(store).use(router).use(MyPlugins).directive('fontsize', fontsize).mount('#app')

const app = createApp(App)
app.use(store).use(router)
app.directive('fontsize', fontsize)
app.use(MyPlugins)
app.mount('#app')
