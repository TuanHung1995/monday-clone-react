import { extendTheme } from '@mui/material/styles'
import { darkPalette } from './palettes/dark'
import { lightPalette } from './palettes/light'
import { themeComponents } from './components'

// ==============================
// Layout constants
// ==============================
// const APP_BAR_HEIGHT = '60px'
// const BOARD_BAR_HEIGHT = '64px'
// const BOARD_CONTENT_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT})`
// const COLUMN_HEADER_HEIGHT = '48px'
// const COLUMN_FOOTER_HEIGHT = '56px'

// ==============================
// Custom theme
// ==============================
const theme = extendTheme({
  // monday: {
  //   appBarHeight: APP_BAR_HEIGHT,
  //   boardBarHeight: BOARD_BAR_HEIGHT,
  //   boardContentHeight: BOARD_CONTENT_HEIGHT,
  //   columnHeaderHeight: COLUMN_HEADER_HEIGHT,
  //   columnFooterHeight: COLUMN_FOOTER_HEIGHT
  // },

  // ==============================
  // Color Schemes
  // ==============================
  colorSchemes: {
      light: {
        palette: lightPalette
      },
      dark: { 
        palette: darkPalette
      }
    },
  
    cssVarPrefix: 'app',
    colorSchemeSelector: 'data-mode',

  // ==============================
  // Typography
  // ==============================
  typography: {
    fontFamily: 'Inter, Roboto, Helvetica, Arial, sans-serif',
    h1: { fontSize: '2rem', fontWeight: 600 },
    h2: { fontSize: '1.5rem', fontWeight: 600 },
    h3: { fontSize: '1.25rem', fontWeight: 600 },
    body1: { fontSize: '0.9375rem' },
    body2: { fontSize: '0.875rem', color: '#5F6C80' },
    button: { textTransform: 'none', fontWeight: 500 }
  },

  shape: {
    borderRadius: 12
  },

  // ==============================
  // Component Overrides
  // ==============================
  components: {
    ...(themeComponents as any)
  }
})

export default theme
