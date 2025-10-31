import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";

const AppRouter = () => (
  <BrowserRouter>
    <AppLayout>
      <Routes>
        <Route path="/" element={<Navigate to="/my-work" />} />
      </Routes>
    </AppLayout>
  </BrowserRouter>
);

export default AppRouter;
