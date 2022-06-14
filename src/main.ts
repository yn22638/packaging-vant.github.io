import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import 'virtual:windi.css'
// 按需引入
// import { vant } from './plugins/vant.config'
import 'vant/lib/index.css'
const app = createApp(App)
// vant(app)
app.use(router).mount('#app')
