import styles from "./css/Form.module.css";
import BodyForm from "../shared/ui/FormPart/BodyForm";
import { HeaderForm } from "../shared/ui/FormPart/HeaderForm";


const RegistForm = () => {

    return (
        <div className={styles.FormDivWrap}>
            <div className={styles.FormDivReg}>
                <h1 className={styles.FormTitle}>Регистрация</h1>
                <HeaderForm formContent="У вас уже есть аккаунт?"
                            linkTo="/login"
                            linkTitle="Войти"
                            wrapperLink="styles.FormDivWrapLink"/>
                <BodyForm/>
            </div>
        </div>
    )
}

export default RegistForm;