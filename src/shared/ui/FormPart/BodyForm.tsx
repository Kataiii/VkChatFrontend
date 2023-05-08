import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { HELPER_PASSWORD_MESSAGE } from "../../common/ValidationHelper";
import styles from "../css/Input.module.css"
import styleBtn from "../css/Button.module.css"
import ErrorForm from "./ErrorForm";
import HelperForm from "./HelperForm";
import { useState } from "react";
import { schemaPersonRegist, FormValues } from "../../../entities/user/User";
import RegistUser from "../../../store/regist";
import { useNavigate } from "react-router-dom";


const BodyForm = () => {
    const navigate = useNavigate();
    const[helperState, setHelperState] = useState({
        visible : false
    });
    const formApi = useForm<FormValues>({
        mode: 'onChange',
        resolver: yupResolver(schemaPersonRegist)
    });

    const {
        handleSubmit,
        formState: { errors },
        control,
        clearErrors,
        register
    } = formApi;

    const onSubmit = handleSubmit(
        async (data) => {
            RegistUser.formRegist.login = data.login;
            RegistUser.formRegist.email = data.email;
            RegistUser.formRegist.password = data.password;
            RegistUser.formRegist.repeatPassword = data.repeatPassword;
            const res = await RegistUser.apiRegistUser();
            RegistUser.formRegist.isRegist ? navigate('/home') : navigate('/login/register/user');
        }
    );

    const onMouseEnterHandler  = () => {
            setHelperState({
                ...helperState, visible : true
            })
    }

    const onMouseLeaveHandler  = () => {
            setHelperState({
                ...helperState, visible : false
            })
    }


    const styleName = errors?.login ? styles.FormInputEr : styles.FormInput;
    const styleEmail = errors?.email ? styles.FormInputEr : styles.FormInput;
    const stylePassword = errors?.password ? styles.FormInputEr : styles.FormInput;
    const styleRepPassword = errors?.repeatPassword ? styles.FormInputEr : styles.FormInput;

    return (
        <div className="App">
            <form onSubmit={onSubmit}>

                <div className={styles.FormDivWrapError}>
                    <input className={styleName} {...register("login")} placeholder="Ваше имя..." />
                    {errors?.login
                        &&
                        <ErrorForm errorcontent={(typeof errors.login.message == 'string') ? errors.login.message : ""}></ErrorForm>
                    }
                </div>

                <div className={styles.FormDivWrapError}>
                    <input className={styleEmail} {...register("email")} placeholder="Email..." />
                    {errors?.email &&
                        <ErrorForm errorcontent={(typeof errors.email.message == 'string') ? errors.email.message : ""}></ErrorForm>
                    }
                </div>

                <div className={styles.FormDivWrapError}>
                    <input className={stylePassword}
                        type="password"
                        {...register("password")}
                        placeholder="Пароль..."
                        onMouseEnter={onMouseEnterHandler}
                        onMouseLeave={onMouseLeaveHandler}
                    />
                    {errors?.password &&
                        <ErrorForm errorcontent={(typeof errors.password.message == 'string') && !helperState.visible ? errors.password.message : ""}></ErrorForm>
                    }
                    {
                        helperState.visible == true
                            ?
                                <HelperForm content={HELPER_PASSWORD_MESSAGE}/>
                            :
                                null
                    }
                </div>

                <div className={styles.FormDivWrapError}>
                    <input className={styleRepPassword}
                        type="password"
                        {...register("repeatPassword")}
                        placeholder="Подтверждение пароля..."
                    />
                    {errors?.repeatPassword &&
                        <ErrorForm errorcontent={(typeof errors.repeatPassword.message == 'string') ? errors.repeatPassword.message : ""}></ErrorForm>
                    }
                </div>

                <input className={styleBtn.BtnStyle} type="submit" />
            </form>
        </div>
    );
}

export default BodyForm;