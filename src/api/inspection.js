import Axios from '@/axios'

export default {
    async getInspections() {
        return await Axios.get('/inspections/dates/')
    },
    async getDate(params) {
        return await Axios.get('/inspections/inspections/', params)
    },
    //Inspection页面获取日程时间列表
    async getInspectionsDates() {
        return await Axios.get('/inspections/opendates/')
    },
    ////Inspection页面获取当日日程，传入YY-MM-DD
    async getInspectionstPlan(params) {
        return await Axios.get('/inspections/openinspections/', params)
    },
}