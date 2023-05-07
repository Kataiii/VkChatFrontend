import LoginPage from "../../pages/LoginPage";
import RegisterPage from "../../pages/RegisterPage";
import ErrorPage from "../../pages/ErrorPage";


const AuthenticationRoutes = {data: [
        {
          path: '/login',
          element: <LoginPage />,
          errorElement: <ErrorPage />
        },
        {
            path: '/register',
            element: <RegisterPage />,
            errorElement: <ErrorPage /> 
        }
    ]
}

export default AuthenticationRoutes;