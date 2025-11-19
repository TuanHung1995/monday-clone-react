import AppRouter from '@routes/AppRoutes'
import './index.css'
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <RouterProvider router={AppRouter} />
  )
}

export default App
