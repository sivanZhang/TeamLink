import Axios from '@/axios'

export default {
    async getInspections() {
        return await Axios.get('/inspections/dates/')
    },
    async getDate(params) {
        return await Axios.get('/inspections/inspections/', params)
    },

}