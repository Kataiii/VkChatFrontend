import React from "react"
import styles from './css/Button.module.css'

interface BtnProps{
    title : string,
    onClick : () => void
}


const Button : React.FC<BtnProps> = (props) => {

    return(
        <button className={styles.BtnStyle} onClick={props.onClick}>{props.title}</button>
    );
}

export default Button;