import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import vClickOutside from "click-outside-vue3"

import "./assets/main.css"

const app = createApp(App)

app.use(vClickOutside)

app.use(router)

app.mount("#app")
