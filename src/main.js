import { defineCustomElement } from 'vue'
import App from "./App.vue";

const el = defineCustomElement(App)
customElements.define('app-app', el)
