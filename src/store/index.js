import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);
/* Vue使用插件的声明 */

export default new Vuex.Store({
  state,
  actions,
  mutations,
  /* getters: {
    doubleCity (state) {
      return state.city + '' + state.city;
    }
  } */
  /* getters的用法类似于computed */
});
