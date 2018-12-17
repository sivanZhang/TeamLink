import axiso from '@/axios'

const agent = {
    async getCollections() {
        return await axiso.get('/collection/collection/')
    },
    async postCollections(data) {
        return await axiso.post('/collection/collection/', data)
    },
    async postPlan(paylaod) {
        return await axiso.post('/property/calendar/', paylaod)
    },
}
export default agent