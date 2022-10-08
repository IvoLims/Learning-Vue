import rootMutations from './mutations.js';
import rootActions from './actions.js';
import rootGetters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      counter: 0,
    };
  },
  mutations: rootMutations,
  //   {
  //     increment(state) {
  //       state.counter = state.counter + 1;
  //     },
  //     increase(state, payload) {
  //       state.counter = state.counter + payload.value;
  //     },
  //   },
  actions: rootActions,
  //   {
  //     increment(context) {
  //       setTimeout(() => {
  //         context.commit('increment');
  //       }, 2000);
  //     },
  //     increase(context, payload) {
  //       context.commit('increase', payload);
  //     },
  //   },
  getters: rootGetters,
  //   {
  //     /* Forma de acedermos aos stages que rodeiam este
  //     testAuth(state, getters, rootState, rootGetters)
  //     */
  //     testAuth(state) {
  //       return state.isLoggedIn;
  //     },
  //     finalCounter(state) {
  //       return state.counter * 2;
  //     },
  //     normalizedCounter(_, getters) {
  //       const finalCounter = getters.finalCounter;
  //       if (finalCounter < 0) {
  //         return 0;
  //       }
  //       if (finalCounter > 100) {
  //         return 100;
  //       }
  //       return finalCounter;
  //     },
  //   },
};
