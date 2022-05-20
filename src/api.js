const axios = require('axios');


export default class Api {

    static ADD_USER_URL = 'http://localhost:4000/user/add'
    static ALL_USER_URL = 'http://localhost:4000/user'
    static DELETE_ALL_URL = 'http://localhost:4000/user/deleteall'
    static LOGIN_URL = 'http://localhost:4000/user/login'


    static addUser = (payload) => {
        return axios.post(Api.ADD_USER_URL, payload);
    }
    static getAllUser = () => {
        return axios.get(Api.ALL_USER_URL);
    }
    static deleteAllUser = () => {
        return axios.delete(Api.DELETE_ALL_URL);
    }
    static loginUser = (payload) => {
        return axios.post(Api.LOGIN_URL, payload);
    }
}

