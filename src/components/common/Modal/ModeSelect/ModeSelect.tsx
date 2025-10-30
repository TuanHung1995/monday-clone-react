import { useColorScheme } from '@mui/material/styles'
import { Box, IconButton, Menu, MenuItem, Tooltip } from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import { useState } from 'react'

export default function ModeSelect() {
  const { mode, setMode } = useColorScheme()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleSelect = (value: 'light' | 'dark' | 'system') => {
    setMode(value)
    handleClose()
  }

  const currentIcon = {
    light: <LightModeIcon fontSize="small" />,
    dark: <DarkModeOutlinedIcon fontSize="small" />,
    system: <SettingsBrightnessIcon fontSize="small" />,
  }[mode || 'system']

  return (
    <Box>
      <Tooltip title="Theme mode">
        <IconButton
          onClick={handleOpen}
          sx={{
            color: 'text.primary',
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark'
                ? 'rgba(255,255,255,0.08)'
                : 'rgba(0,0,0,0.04)',
            borderRadius: '8px',
            transition: 'all 0.2s ease',
            '&:hover': {
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark'
                  ? 'rgba(255,255,255,0.15)'
                  : 'rgba(0,0,0,0.08)',
            },
          }}
        >
          {currentIcon}
        </IconButton>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            sx: {
              borderRadius: 2,
              mt: 1,
              minWidth: 160,
              boxShadow: (theme) =>
                theme.palette.mode === 'dark'
                  ? '0px 2px 10px rgba(0,0,0,0.4)'
                  : '0px 2px 10px rgba(0,0,0,0.15)',
            },
          },
        }}
      >
        <MenuItem
          selected={mode === 'light'}
          onClick={() => handleSelect('light')}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.9rem',
          }}
        >
          <LightModeIcon fontSize="small" /> Light
        </MenuItem>
        <MenuItem
          selected={mode === 'dark'}
          onClick={() => handleSelect('dark')}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.9rem',
          }}
        >
          <DarkModeOutlinedIcon fontSize="small" /> Dark
        </MenuItem>
        <MenuItem
          selected={mode === 'system'}
          onClick={() => handleSelect('system')}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.9rem',
          }}
        >
          <SettingsBrightnessIcon fontSize="small" /> System
        </MenuItem>
      </Menu>
    </Box>
  )
}
