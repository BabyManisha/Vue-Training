import Vue from 'vue'
import Vuex from 'vuex'
import todosModule from './modules/todos'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    'name' : 'Manisha',
  },
  modules: {
    mytodos: todosModule
  },
  getters: {
    name: state => state.name,
    todosCount: state => {
      return state.mytodos.todos.length
    }
  }
})
