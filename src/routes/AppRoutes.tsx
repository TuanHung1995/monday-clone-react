import { Routes, Route } from "react-router-dom";
import HomePage from "@pages/Home";

const AppRouter = () => (
      <Routes>
        <Route path="/home" element={<HomePage />} />
      </Routes>
);

export default AppRouter;
