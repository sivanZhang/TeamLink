import axiso from '@/axios'

const agent = {
    async getAgent(params) {
        return await axiso.get('/agent/agent/', { params })
    },
    async getAgentDetail(params) {
        return await axiso.get(`/agent/agent/${params}`)
    }
}
export default agent