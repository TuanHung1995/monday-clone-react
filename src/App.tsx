// import Box from '@mui/material/Box'
// import ModeSelect from '@components/common/Modal/ModeSelect/ModeSelect'
import { BrowserRouter } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import AppRouter from '@routes/AppRoutes'
import './index.css'

function App() {
  return (
    //   <Box display="flex" alignItems="center" gap={1.5}>
    //     <Box color="secondary">Logo</Box>
    //     <ModeSelect />
    //   </Box>
    // </>
    <BrowserRouter>
      <AppLayout>
        <AppRouter />
      </AppLayout>
    </BrowserRouter>
  )
}

export default App
