import Axios from '@/axios'

const api = {
    async getInspections() {
        return await Axios.get('/inspections/inspections/')
    }
}
export default api