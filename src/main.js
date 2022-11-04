import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

// global styles
import './assets/main.css'

// import vuex store
// import store from './store'

createApp(App)
  .use(router)
  // .use(store)
  .use(createPinia())
  .mount('#app')
