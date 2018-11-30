import axiso from '@/axios'

const persist = {
  async loginQ(params) {
    return await axiso.post('/api/TokenAuth/Login', params)
  }
}


export default persist