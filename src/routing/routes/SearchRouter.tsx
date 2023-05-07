import SearchPage from "../../pages/SearchPage";
import ErrorPage from "../../pages/ErrorPage";


const SearchRoutes = {
    path: '/search',
    element: <SearchPage />,
    errorElement: <ErrorPage />
}

export default SearchRoutes;