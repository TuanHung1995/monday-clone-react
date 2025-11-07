import { MuiButton } from './MuiButton'
import { MuiCard } from './MuiCard'
import { MuiCssBaseline } from './MuiCssBaseline'
import { MuiOutlinedInput } from './MuiOutlinedInput'
import { MuiTypography } from './MuiTypography'
import { MuiPaper } from './MuiPaper'

export const themeComponents = {
    MuiCssBaseline: {
        styleOverrides: {
            ...MuiCssBaseline
        }
    },
    MuiButton: {
        styleOverrides: {
            ...MuiButton
        }
    },
    MuiCard: {
        styleOverrides: {
            ...MuiCard
        }
    },
    MuiOutlinedInput: {
        styleOverrides: {
            ...MuiOutlinedInput
        }
    },
    MuiTypography: {
        styleOverrides: {
            ...MuiTypography
        }
    },
    MuiPaper: {
        styleOverrides: {
            ...MuiPaper
        }
    }
}