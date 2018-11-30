import axiso from '@/axios'

const persist = {
  async getRanking(params) {
    return await axiso.get('/api/services/app/Reporting/GetRankingTradeDataAsync', { params })
  }
}


export default persist