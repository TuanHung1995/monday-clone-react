import Box from '@mui/material/Box'
import ModeSelect from '@components/ModeSelect/ModeSelect'

function App() {
  return (
    <>
      <Box display="flex" alignItems="center" gap={1.5}>
        <Box>Logo</Box>
        <ModeSelect />
      </Box>
    </>
  )
}

export default App
