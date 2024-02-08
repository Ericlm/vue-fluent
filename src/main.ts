import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { FluentBundle, FluentResource } from '@fluent/bundle'
import { createFluentVue } from 'fluent-vue'
import fluentMsg from './locales/hello.ftl?raw'

const ftlBundle = new FluentBundle('en')
ftlBundle.addResource(new FluentResource(fluentMsg))
const fluent = createFluentVue({
  bundles: [ftlBundle]
})

const helloPeople = 'hello people'

createApp(App).use(fluent).mount('#app')