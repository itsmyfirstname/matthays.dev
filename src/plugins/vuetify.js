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
  dark: true,
  colors: {
    background: '#807E83',
    surface: '#BAB384',
    primary: '#34424C',
    secondary: '#A0A8A2',
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
    defaultTheme: 'customDarkTheme',
    themes: {
      myCustomLightTheme,
      customDarkTheme
    }
  }
})
