/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { createVuetify } from 'vuetify'

const customDarkTheme = {
  dark: true,
  colors: {
    background: '#22242D',
    surface: '#C1DDDF',
    primary: '#C4D9C7',
    secondary: '#A2A586',
    highlight: '#B0594A',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  }
}

const myCustomLightTheme = {
  dark: false,
  colors: {
    background: '#50514F',
    surface: '#FDFFF7',
    primary: '#B4ADEA',
    secondary: '#59FFA0',
    highlight: '#FFED65',
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
      customDarkTheme
    }
  }
})
