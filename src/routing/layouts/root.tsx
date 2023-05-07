import { Outlet } from "react-router-dom";
import styles from '../../App.module.css'


export default function Root(){
    //TODO проверка есть ли refresh token, если да перенаправление на профиль

    return(
        <div className={styles.App}>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
}