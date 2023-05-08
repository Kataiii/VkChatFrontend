import { Link, Outlet } from "react-router-dom";
import styles from "./css/App.module.css";
import AuthorisedHeader from "../../shared/ui/AuthorisedHeader";
import stylesSidePanel from "./css/StylesSidePanel.module.css";
import { DropdownButtonItem } from "../../shared/ui/DropDownMenu";
import { useMemo } from "react";

export interface LinkItem {
    label: string,
    action: string
  }

export default function Root() {

    const LinkItems = useMemo<LinkItem[]>(() => [
        {
            label: 'Мой профиль',
            //TODO add my id
            action: '1'
        },
        {
            label: 'Новости',
            action: 'news'
        },
        {
            label: 'Чаты',
            action: 'chats'
        },
        {
            label: 'Друзья',
            action: 'friends'
        },
        {
            label: 'Поиск людей',
            action: '/search'
        }
    ], [])

    return (
        <div className={styles.AppDev}>
            <AuthorisedHeader></AuthorisedHeader>
            <div className={stylesSidePanel.MainDiv}>
                <div className={stylesSidePanel.DivsWrap}>
                    <div className={stylesSidePanel.SidePanel}>
                        <>
                            {
                                LinkItems.map((item, index) => {
                                    return <Link key={index} className={stylesSidePanel.LinkPersonal}
                                        to={item.action}>{item.label}</Link>
                                }) 
                            }
                        </>
                    </div>
                    <div className={stylesSidePanel.DivWrapPageContent}>
                        <div>
                            <Outlet></Outlet>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}