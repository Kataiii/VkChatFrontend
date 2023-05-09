import DefaultAvatar from '../assets/icons/icon-avatar.svg'
import styles from './css/CardUser.module.css'
import IconLocation from '../assets/icons/icon-locations.svg'
import Button from '../shared/ui/ButtonPrimary'
import { ID_USER } from '../store/stateApp'
import { useLocation } from 'react-router-dom'
import ChangeFriendStatus from '../features/change-friend-status/ui/ChangeFriendStatus'


const CardUser = () => {
    const locate = useLocation();

    return(
        <div>
            <div className={styles.DivCard}>
                <img src={DefaultAvatar} alt='avatar' className={styles.DivAvatar}></img>
                <div className={styles.DivContent}>
                    <h1 className={styles.DivTitle}>Логин</h1>
                    <p className={styles.Content}>Фамилия Имя Отчество</p>
                    <div className={styles.DivWrapLocation}>
                        <div className={styles.DivLocate}>
                            <img src={IconLocation} alt='locate'></img>
                            <p className={styles.Content}>Город</p>
                        </div>
                        <div>
                            <p className={styles.Content}>Вуз</p>
                        </div>
                    </div>
                </div>
            </div>
            {
                String(ID_USER) == locate.pathname.slice(locate.pathname.lastIndexOf('/') + 1, locate.pathname.length)
                ?
                    <Button title='Редактировать данные' onClick={() => console.log('Изменить')}></Button>
                :
                    <ChangeFriendStatus id_user={Number(locate.pathname.slice(locate.pathname.lastIndexOf('/') + 1, locate.pathname.length))}/>
            }
        </div>
    )
}

export default CardUser;