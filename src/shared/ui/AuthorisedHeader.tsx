import DropdownMenu, { DropdownButtonItem } from "./DropDownMenu";
import styles from "./css/Header.module.css"
import { useMemo } from "react";
import { useNavigate } from "react-router";


const AuthorisedHeader = () => {
    const className : string = styles.AuthHeader;

    const navigate = useNavigate();

    const authorisedmenuItems = useMemo<DropdownButtonItem[]>(() =>  [
      {
        label: 'Мои профиль',
        //TODO добавить id usera в путь
        action: () => navigate('1')
      },
      {
        label: 'Выйти',
        action: () => navigate('/login')
      }
    ], [])

    return(
        <div className={className}>
              <DropdownMenu links={authorisedmenuItems}></DropdownMenu>
        </div>
    );
}

export default AuthorisedHeader;