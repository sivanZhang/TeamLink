import Axios from '@/axios'

const login = {
    async getLogin() {
        return await Axios.post('/wpuser/login/', {
            username: 'bensom1989',
            password: '123QWEasd@'
        })
    }
}
export default login