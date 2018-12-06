import axiso from '@/axios'

const agent = {
    async getCollections() {
        return await axiso.get('/collection/collection/')
    },
    async postCollections(data) {
        return await axiso.post('/collection/collection/', data)
    }
}
export default agent