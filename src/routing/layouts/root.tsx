import { useEffect } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import styles from '../../App.module.css'


export default function Root(){
    //TODO проверка есть ли refresh token, если да перенаправление на профиль
    const locate = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if(locate.pathname == '/') navigate('/login');
    }, [locate.pathname])
    

    return(
        <div className={styles.App}>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
}