import { useLocation } from "react-router-dom";
import AddPostForm from "../shared/ui/AddPostForm";
import { ID_USER } from "../store/stateApp";
import CardUser from "../widgets/CardUser";

const ProfilePage = () => {
    const locate = useLocation();

    return(
        <div>
            <CardUser/>
            {
                String(ID_USER) == locate.pathname.slice(locate.pathname.lastIndexOf('/') + 1, locate.pathname.length)
                ?
                    <AddPostForm/>
                :
                    <div></div>
            }
            
        </div>
    )
}

export default ProfilePage;