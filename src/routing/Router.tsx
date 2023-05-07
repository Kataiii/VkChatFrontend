import { createBrowserRouter } from "react-router-dom";
import AuthenticationRoutes from "./routes/AuthenticationRoute";
import ProfileRoutes from "./routes/ProfileRoute";
import SearchRoutes from "./routes/SearchRouter";
import Root from "./layouts/root";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children:[
        AuthenticationRoutes.data[0],
        AuthenticationRoutes.data[1],
        SearchRoutes
    ]
  },
  ProfileRoutes
]);

export default router;