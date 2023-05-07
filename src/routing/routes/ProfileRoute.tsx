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
            path: '/profile/:id',
            element: <ProfilePage />
        },
        {
            path: '/profile/friends',
            element: <FriendsPage />
        },
        {
            path: 'profile/news',
            element: <NewsPage />
        },
        {
            path: '/profile/chats',
            element: <ChatsPage />
        }
    ]
}

export default ProfileRoutes;