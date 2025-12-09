import { createBrowserRouter } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import AppLayout from "../layouts/AppLayout";
import Login from "../pages/Auth/Login";
import HomePage from "@pages/Home";
import BoardPage from "../pages/Board";
import DashBoardPage from "../pages/DashBoard/DashBoardPage";
import OAuth2Redirect from "@pages/Auth/OAuth2Redirect";

const AppRouter = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/oauth2/redirect",
    element: <OAuth2Redirect />,
  },

  // ========================
  // PROTECTED ROUTES
  // ========================
  
  {
    path: "/",
    element: (
      <PrivateRoute>
        <AppLayout />
      </PrivateRoute>
    ),

    children: [
      { path: "home", element: <HomePage /> },
      { path: "dashboard", element: <DashBoardPage /> },
      { path: 'board', element: <BoardPage /> }
    ],
  },
])

export default AppRouter;
