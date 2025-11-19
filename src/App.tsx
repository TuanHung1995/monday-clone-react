// import Box from '@mui/material/Box'
// import ModeSelect from '@components/common/Modal/ModeSelect/ModeSelect'
import { BrowserRouter } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import AppRouter from '@routes/AppRoutes'
import './index.css'
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <RouterProvider router={AppRouter} />
  )
}

export default App
