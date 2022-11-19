import axios from "axios"
import StaticVar from "../Config/StaticVar"

// ===> api create
const api = axios.create({
    baseURL: StaticVar.URL_API,
    timeout: 1000000,
    headers: {}
})

api.interceptors.request.use(
    async (config) => {
        if (!config.headers) {
            config.headers = {}
        }
        // const auth = getAuth();
        // const authtoken = await auth?.currentUser?.getIdTokenResult()
        config.headers.authtoken = localStorage.authtoken
        // updateToken({authtoken}).then(()=>{
        //   localStorage.setItem("authtoken",authtoken);
        // })

        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

const getMember = (data) => api.get("/club/member", data)

export const apis = {
    getMember,
}

export default apis
