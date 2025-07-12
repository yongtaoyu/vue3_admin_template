import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import gloablComponent from '@/components/index'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus, {
  locale: zhCn,
})
app.use(gloablComponent)

//@ts-ignore
import 'virtual:svg-icons-register'
import '@/styles/index.scss'

import request from './utils/request'
request({
  url: 'user/login',
  method: 'POST',
  data: {
    username: 'admin',
    password: '111111',
  },
})

app.mount('#app')
