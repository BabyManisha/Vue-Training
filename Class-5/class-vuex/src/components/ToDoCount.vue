<template>
  <div class="right">
    <h1>This is ToDo Count - {{$store.getters.todosCount}}</h1>

    <form @submit.prevent="addTodo()">
      <input class="link-input" type="text" placeholder="Enter ToDo" v-model="newTodo" />
    </form>

    <button @click="removeAllTodos">Remove All ToDos</button>
    <button @click="removeAllTodosAsync">Remove All ToDos - Async</button>

  </div>
</template>

<script>
import {mapMutations, mapActions} from 'vuex';
export default {
  name: 'todocount',
  data() {
    return {
      newTodo: ''
    }
  },
  methods: {
    ...mapMutations('mytodos', [
      'ADD_TODO'
    ]),
    ...mapActions('mytodos', [
      'removeAllTodos',
      'removeAllTodosAsync'
    ]),
    addTodo(){
      this.ADD_TODO(this.newTodo);
      this.newTodo = ''
    }
  },
}
</script>

<style scoped>
input {
  border: none;
  padding: 20px;
  width: calc(100% - 40px);
  box-shadow: 0 5px 5px lightgrey;
  margin-bottom: 50px;
  outline: none;
}
button {
  padding: 10px;
  margin-top: 30px;
  width: 100%;
  background: orange;
  border: 1px solid lightsalmon;
  outline: 0;
  cursor: pointer;
}
</style>