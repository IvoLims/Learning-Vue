// import { createStore } from 'vuex';

// const counterModule = {
//   namespaced: true,
//   state() {
//     return {
//       counter: 0,
//     };
//   },
//   mutations: {
//     increment(state) {
//       state.counter = state.counter + 1;
//     },
//     increase(state, payload) {
//       state.counter = state.counter + payload.value;
//     },
//   },
//   actions: {
//     increment(context) {
//       setTimeout(() => {
//         context.commit('increment');
//       }, 2000);
//     },
//     increase(context, payload) {
//       context.commit('increase', payload);
//     },
//   },
//   getters: {
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
// };

// It will be split differently
//
// const store = createStore({
//   modules: {
//     numbers: counterModule,
//   },
//   state() {
//     return {
//       //   counter: 0,
//       isLoggedIn: false,
//     };
//   },
//   // Makes possible to change all the instances where it is used all at once
//   mutations: {
//     // increment(state) {
//     //   state.counter = state.counter + 1;
//     // },
//     // increase(state, payload) {
//     //   state.counter = state.counter + payload.value;
//     // },
//     setAuth(state, payload) {
//       state.isLoggedIn = payload.isAuth;
//     },
//   },
//   actions: {
//     // increment(context) {
//     //   setTimeout(() => {
//     //     context.commit('increment');
//     //   }, 2000);
//     // },
//     // increase(context, payload) {
//     //   context.commit('increase', payload);
//     // },
//     login(context) {
//       context.commit('setAuth', { isAuth: true });
//     },
//     logout(context) {
//       context.commit('setAuth', { isAuth: false });
//     },
//   },
//   getters: {
//     // finalCounter(state) {
//     //   return state.counter * 2;
//     // },
//     // normalizedCounter(_, getters) {
//     //   const finalCounter = getters.finalCounter;
//     //   if (finalCounter < 0) {
//     //     return 0;
//     //   }
//     //   if (finalCounter > 100) {
//     //     return 100;
//     //   }
//     //   return finalCounter;
//     // },
//     userIsAuthenticated(state) {
//       return state.isLoggedIn;
//     },
//   },
// });

// export default store;
