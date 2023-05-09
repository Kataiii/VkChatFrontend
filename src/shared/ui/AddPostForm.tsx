import Button from "./ButtonPrimary";
import styles from './css/AddPostForm.module.css'
import IconAttach from '../../assets/icons/icon-attach.svg'
import { useState } from "react";


const AddPostForm = () => {
    const [isVisible, setIsVisible] = useState(false);

    const onClickHandler = () => {
        const input: HTMLInputElement | null = document.getElementById('InputFile') as HTMLInputElement;
        input.click();
    }

    const onChangeHandler = () => {
        const input: HTMLInputElement | null = document.getElementById('InputFile') as HTMLInputElement;
        if(input != null && input.files != null && input.files.length > 0) {
            setIsVisible(true);
            return;
        }
        setIsVisible(false);
    }

    return(
        <div className={styles.DivAddPost}>
            <div className={styles.DivAddPostContent}>
                <div className={styles.DivWrapImage} onClick={onClickHandler}>
                    <img className={styles.Image} src={IconAttach} alt='attach'></img>
                </div>
                <input className={styles.InputText} type='text' placeholder="Что у вас нового?"></input>
                <input id="InputFile" className={styles.InputFile} type='file' onChange={onChangeHandler}></input>
                <Button title="Добавить пост" onClick={() => console.log('Добавить пост')}></Button>
            </div>
            {
                !isVisible
                ?
                    <div></div>
                :
                    <p className="">Файл прикреплен</p>
            }
            
        </div>
    )
}

export default AddPostForm;