import axiso from '@/axios'

const agent = {
    async getCollections() {
        return await axiso.get('/collection/collection/')
    }
}
export default agent