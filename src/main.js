import { createApp } from 'vue'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import * as styles from 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader


export default createVuetify({
  icons: {
    defaultSet: 'mdi', // This is already the default value - only for display purposes
  },
})
import App from './App.vue'
const vuetify = createVuetify({
  components,
  directives,
  styles
})
createApp(App).use(vuetify). mount('#app')