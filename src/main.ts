import './assets/main.css'

import { createApp } from 'vue'
import App from '@/App.vue'
import ApiList from '@/ApiList.vue'

createApp(App).mount('#app')
createApp(ApiList).mount('#list')

