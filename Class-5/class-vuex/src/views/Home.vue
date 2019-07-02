<template>
  <div class="index">
    <!-- <h1>Hello!! Welcome {{myname}} - {{$store.getters.name}}</h1> -->
    <ToDoList></ToDoList>
    <ToDoCount></ToDoCount>
  </div>
</template>

<script>
// @ is an alias to /src
import ToDoList from '../components/ToDoList'
import ToDoCount from '../components/ToDoCount'
import {mapState} from 'vuex'

export default {
  name: 'home',
  // computed: mapState(['name'])
  // computed: {
  //   ...mapState([
  //     'name'
  //   ])
  // },
  components: {
    ToDoList,
    ToDoCount
  },
  computed: {
    ...mapState({
      'myname' : 'name'
    })
  },
}
</script>

<style>
  html, #app, .index {
    height: 100%;
  }
  body {
    background-color: #F4F4F4;
    margin: 0;
    height: 100%;
  }

  .index {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: 100%;
    grid-template-areas: "left right";
    height: 100%;
  }

  .left, .right {
    padding: 30px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }
  ul li {
    padding: 20px;
    background: white;
    margin-bottom: 8px;
  }

  .right {
    grid-area: right;
    background-color: #E9E9E9;
  }

  .rm {
    float: right;
    text-transform: uppercase;
    font-size: .8em;
    background: #f9d0e3;
    border: none;
    padding: 5px;
    color: #ff0076;
    cursor:pointer;
  }

</style>
