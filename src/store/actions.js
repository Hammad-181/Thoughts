import Api from '../api';
const actions = {
    getProfile ({commit}, payload) {
        return new Promise((resolve, reject) => {
            Api.loginUser(payload).then(res => {
                console.log(res);
                commit('setUserProfile', res.data)
                resolve(res.data)
            }).catch(err => reject(err));
        })
    }
    
}
export default actions;