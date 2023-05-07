import { Link } from "react-router-dom"
import styles from "../css/HeaderForm.module.css"

interface IHeaderFormProps{
    formContent : string,
    linkTo : string,
    linkTitle : string,
    wrapperLink : string
}

export const HeaderForm = (props : IHeaderFormProps) => {
    return(
        <div className={styles.FormDivWrapLink}>
        <p className={styles.FormContent}>{props.formContent}</p>
        <Link to={props.linkTo} className={styles.FormLinkWrap}>
          <p className={styles.FormLink}>{props.linkTitle}</p>
        </Link>
      </div>
    )
}