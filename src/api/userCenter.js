import Axios from '@/axios'
const getLogout = async() => {
    return await Axios.get('/users/logout/')
}
export {
    getLogout,
}