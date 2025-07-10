import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

const fn = function () {
  console.log('111')
}
fn()
