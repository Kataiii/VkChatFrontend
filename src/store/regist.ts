import { makeAutoObservable } from "mobx"
import { FormValues } from "../entities/user/User"
import axios from "axios"

class Regist {
    formRegist: FormValues = {
        login: '',
        email: '',
        password: '',
        repeatPassword: '',
        isRegist : false
    }

    constructor() {
        makeAutoObservable(this)
    }

    apiRegistUser = async () => {
        const apiRegistUrl = 'http://127.0.0.1:9000/api/regist-user';
        let response = await axios.post(apiRegistUrl,
            {
                login: this.formRegist.login,
                email: this.formRegist.email,
                password: this.formRegist.password
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                withCredentials: true
            })
            .then((response) => {
                console.log(response);
                // this.visibleError(false);
                 this.formRegist.isRegist = true;
                 //localStorage.setItem('token', response.data.token);
            }
            )
            .catch((error) => {
                if (error.response) {
                    console.log(error.response);
                    // this.visibleError(true);
                    this.formRegist.isRegist = false;
                }
            });
        return this.formRegist;
    }
}

export default new Regist();