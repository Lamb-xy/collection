import axios from 'axios'
import { apiUrl } from '@/api/base.js'

export default {
    login (loginArgs) {
        return axios.post(`${apiUrl}v2/auth/login`, loginArgs)
    },

    get_user_info () {
         
        return axios.get(`${apiUrl}v2/user/` )
    }
}
