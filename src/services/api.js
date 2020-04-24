import axios from 'axios';


const api = axios.create({
    baseURL: 'https://vigilant-varahamihira-f767e8.netlify.app/'
});

export default api;