import axios from 'axios'
//create axios call for backend data
// getAll, getOne, post, update and delete request.
const baseUrl = process.env.NODE_ENV === 'production' ?'https://print-ninjas-api.herokuapp.com/' : 'http://localhost:3000'

const api = axios.create({
  baseURL: baseUrl
});

export default api;

