import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "@pages/Home";

const AppRouter = () => (
      <Routes>
        <Route path="/" element={<Navigate to="/my-work" />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
);

export default AppRouter;
