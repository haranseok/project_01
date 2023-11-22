import App from './App.vue'
import {createApp, ref} from 'vue'
import {registerPlugins} from '@/plugins'
import Router from './router'

const app = createApp(App)

registerPlugins(app)

app.component('Counter', {
    inject: ['counter_header'],
    setup() {
        const count = ref(0)
        return count
    },
    template: `<span>{{ counter_header }}</span>
	<button @click="count++" v-text="count"></button>`
})

app.config.globalProperties.title = 'vue 3 Demo'
app.provide('counter_header', 'Counter')
app.use(Router)
app.mount('#app')
