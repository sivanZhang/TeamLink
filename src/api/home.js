import Axios from '@/axios'
const getProperties = async () => {
  return await Axios.get('/property/properties/')
}
const getProperty = async (params) => {
  return await Axios.get(`/property/properties/${params}`)
}
const getSearch = async (params) => {
    return await Axios.get(`/property/properties/`,{params})
  }
export {
  getProperties,
  getProperty,
  getSearch,
}