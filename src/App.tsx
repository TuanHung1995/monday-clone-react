import { useEffect } from 'react';
import AppRouter from '@routes/AppRoutes';
import './index.css';
import { RouterProvider } from "react-router-dom";
import { useAuthStore } from '@store/auth.store';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

function App() {

  const checkAuth = useAuthStore((state) => state.checkAuth);
  const isLoading = useAuthStore((state) => state.isLoading);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', bgcolor: '#181b34' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <RouterProvider router={AppRouter} />
  )
}

export default App
