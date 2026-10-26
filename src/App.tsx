import { useEffect } from 'react';
import AppRouter from '@routes/AppRoutes';
import './index.css';
import { RouterProvider } from "react-router-dom";
import { useAuthStore } from '@store/auth.store';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

function App() {

  const { checkSession, isLoading } = useAuthStore();

  useEffect(() => {
    checkSession();
  }, [checkSession]);

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <RouterProvider router={AppRouter} />
  )
}

export default App
