import axios from "axios";

export const register = (body) => {
        return new Promise((resolve, reject) => {
            axios.post(`${process.env.REACT_APP_BACKEND_URL}/register`, body)
            .then((response) => {
                resolve(response)
            })
            .catch((err) => {
                reject(err)
            })
        })
    }