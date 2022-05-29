import { createStore } from 'vuex';
import states from './state';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';


export default createStore({
  states,
  mutations,
  actions,
  getters
})
