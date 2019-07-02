export default{
    namespaced: true,
    state: {
        'todos' : ['Wake up', 'Get Ready', 'Eat', 'Office', 'Work']
    },
    getters: {
        todos: state => {
          return state.todos
        },
        // todosCount: state => {
        //   return state.todos.length
        // }
    },
    // Sync
    mutations: {
        ADD_TODO: (state, todo) => {
            state.todos.push(todo);
        },
        REMOVE_TODO: (state, todo) => {
            state.todos.splice(todo, 1);
        },
        REMOVE_ALL_TODOS: (state) => {
            state.todos = []
        }
    },
    // Async
    actions: {
        removeTodo(context, todo) {
            context.commit('REMOVE_TODO', todo)
        },
        removeAllTodos(context) {
            context.commit('REMOVE_ALL_TODOS')
        },
        removeAllTodosAsync(context) {
            setTimeout(()=>{
            context.commit('REMOVE_ALL_TODOS');
            }, 2000)
        }
    }
}