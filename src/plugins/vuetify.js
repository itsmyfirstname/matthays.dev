/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'


const myCustomLightTheme = {
  dark: false,
  colors: {
    background: '#474954',
    surface: '#9E788F',
    primary: '#7284A8',
    'primary-darken-1': '#6ABEA7',
    secondary: '#A9B3CE',
    'secondary-darken-1': '#9FFFF5',
    highlight: '#7CDEDC',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  }
}
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'myCustomLightTheme',
    themes: {
      myCustomLightTheme,
    }
  }
})
