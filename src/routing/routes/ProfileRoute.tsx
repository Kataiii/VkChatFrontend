import ErrorPage from "../../pages/ErrorPage";
import Root from "../layouts/profile";
import ProfilePage from "../../pages/ProfilePage";
import FriendsPage from "../../pages/FriendsPage";
import NewsPage from "../../pages/NewsPage";
import ChatsPage from "../../pages/ChatsPage";

const ProfileRoutes = {
    path: '/profile',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
        {
            path: ':id',
            element: <ProfilePage />
        },
        {
            path: 'friends',
            element: <FriendsPage />
        },
        {
            path: 'news',
            element: <NewsPage />
        },
        {
            path: 'chats',
            element: <ChatsPage />
        }
    ]
}

export default ProfileRoutes;