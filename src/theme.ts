import { extendTheme } from '@mui/material/styles'

// ==============================
// Layout constants
// ==============================
const APP_BAR_HEIGHT = '60px'
const BOARD_BAR_HEIGHT = '64px'
const BOARD_CONTENT_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT})`
const COLUMN_HEADER_HEIGHT = '48px'
const COLUMN_FOOTER_HEIGHT = '56px'

// ==============================
// Custom theme for Monday clone
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
      palette: {
        primary: {
          main: '#0073EA', // Monday blue
          light: '#CDE7FF',
          dark: '#005BBB',
          contrastText: '#fff'
        },
        secondary: {
          main: '#F6F9FB'
        },
        background: {
          default: '#F6F9FB',
          paper: '#FFFFFF'
        },
        text: {
          primary: '#1F1F1F',
          secondary: '#5F6C80'
        },
        divider: '#E6E9EF'
      }
    },
    dark: {
      palette: {
        primary: { main: '#0073EA' },
        background: { default: '#1E1E1E', paper: '#2C2C2C' },
        text: { primary: '#FFFFFF', secondary: '#A3A3A3' },
        divider: '#3C3C3C'
      }
    }
  },

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
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: 'Inter, sans-serif',
          backgroundColor: '#F6F9FB',
          color: '#1F1F1F',
          '*::-webkit-scrollbar': {
            width: '8px',
            height: '8px'
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#D6D8DB',
            borderRadius: '8px'
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#B0B3B8'
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
          fontWeight: 500,
          textTransform: 'none',
          transition: 'all 0.2s ease',
          '&:hover': {
            boxShadow: '0 0 0 3px rgba(0,115,234,0.2)'
          }
        },
        containedPrimary: {
          backgroundColor: '#0073EA',
          '&:hover': {
            backgroundColor: '#005BBB'
          }
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
          border: '1px solid #E6E9EF'
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
          fontSize: '0.9rem',
          '& fieldset': { borderColor: '#E0E0E0' },
          '&:hover fieldset': { borderColor: '#0073EA' },
          '&.Mui-focused fieldset': { borderColor: '#0073EA', borderWidth: '1.5px' }
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          '&.MuiTypography-body1': { fontSize: '0.9375rem' }
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          borderRadius: '12px'
        }
      }
    }
  }
})

export default theme
