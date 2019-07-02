<template>
  <div class="left">
    <h1>This is ToDOList - {{ $store.getters.name }}</h1>

    <ul>
      <li v-for="(todo, index) in todos" v-bind:key="index">
        {{todo}}
        <button @click="removeTodo(todo)" class="rm">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex';
export default {
  name: 'todolist',
  computed: {
    ...mapState('mytodos', {
      'todos' : 'todos'
    })
  },
  methods: {
    ...mapMutations('mytodos', [
      'REMOVE_TODO'
    ]),
    ...mapActions('mytodos', [
      'removeTodo'
    ]),
    // removeTodo(todo){
    //   this.REMOVE_TODO(todo)
    // }
  },
}
</script>