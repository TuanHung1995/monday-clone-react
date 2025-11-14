import { Routes, Route } from "react-router-dom";

import HomePage from "@pages/Home";
import BoardPage from "@pages/Board";

const AppRouter = () => (
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/board" element={<BoardPage />} />
      </Routes>
);

export default AppRouter;
