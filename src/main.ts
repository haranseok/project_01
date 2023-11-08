import App from './App.vue'
import { createApp } from 'vue'
import { registerPlugins } from '@/plugins'
import Router from './router'

const app = createApp(App)

registerPlugins(app)

app.use(Router)
app.mount('#app')
