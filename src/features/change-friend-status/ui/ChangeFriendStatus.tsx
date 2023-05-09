import { observer } from "mobx-react-lite";
import { useLocation } from "react-router-dom";
import Button from "../../../shared/ui/ButtonPrimary";
import friends from "../store/friends";

const ChangeFriendStatus = observer((props: {id_user: number}) => {

    return(
        <div>
            {
                friends.friends_id.find(item => item == props.id_user) == undefined
                ?
                    <Button title='Добавить в друзья' onClick={() => friends.addFriend(props.id_user)}></Button>
                :
                    <Button title='Удалить из друзей' onClick={() => friends.deleteFriend(props.id_user)}></Button>
            }
        </div>
    )
})

export default ChangeFriendStatus;