import { Routes, Route } from "react-router-dom";

import HomePage from "@pages/Home";
import BoardPage from "@pages/Board";
import Login from "@pages/Auth/Login";

const AppRouter = () => (
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/board" element={<BoardPage />} />
      </Routes>
);

export default AppRouter;
