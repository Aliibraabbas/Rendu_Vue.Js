import { createStore } from 'vuex'

export default createStore({
  state: {

    numbers: '',
    contact : [
      {
        name: 'Ali',
        number: '0601005579',
      },
      {
        name: 'Contact2',
        number: '0606060606',
      },
      {
        name: 'Contact3',
        number: '0601020304',
      },
    ],
    called : [],

  },
  getters: {
  },
  mutations: {

    addNum(state, number) {
      state.numbers += number
    },

    removeNum(state) {
      state.numbers = state.numbers.slice(0, -1)
    },
    

    callHistory(state, history_call) {
      state.called.push(history_call)
    },

    addContact(state, contact) {
      state.contact.push((contact))
    },
  },
  actions: {
  },
  modules: {
  }
})
