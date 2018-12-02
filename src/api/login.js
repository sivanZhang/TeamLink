import Axios from '@/axios'

const login = {
    async getLogin(data) {
        return await Axios.post('/wpuser/login/', data)
    }
}
export default login