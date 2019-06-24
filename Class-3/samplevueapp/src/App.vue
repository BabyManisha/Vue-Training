<template>
  <div id="app">
    <navheader @changePage="changeActivepage"></navheader>
    <DrawingBoard v-if="activePage == 'dapp'"></DrawingBoard>
    <contactpage v-else></contactpage>
  </div>
</template>

<script>
import navheader from './components/navheader.vue'
import contactpage from './components/contactpage.vue'
import DrawingBoard from './components/DrawingBoard.vue'

export default {
  name: 'app',
  data() {
    return {
      activePage: 'dapp'
    }
  },
  components: {
    navheader,
    contactpage,
    DrawingBoard
  },
  methods: {
    changeActivepage(page){
      this.activePage = page;
    }
  },
}
</script>