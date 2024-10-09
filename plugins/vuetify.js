// plugins/vuetify.js
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    theme: {
        themes: {
            light: {
                primary: "#119DA4",
                secondary: "#171b34",
                accent: "3D87E4"
            }
        },
      },

  })

  nuxtApp.vueApp.use(vuetify)
})