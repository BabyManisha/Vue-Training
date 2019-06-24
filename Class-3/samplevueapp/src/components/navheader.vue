<template>
  <div class="navhead">
    <h1>This is Header</h1>
    <button v-for="(p, k) in pages" @click="changeActivePage(k)" :key="p">{{p}}</button>
  </div>
</template>

<script>
export default {
  name: 'navheader',
  data() {
    return {
      pages: {
        'dapp' : 'Drawing App',
        'capp' : 'Contact Page'
      }
    }
  },
  methods: {
    changeActivePage(page){
      this.$emit('changePage', page);
    }
  },
}
</script>

<style scoped>
  button{
    width: 50%;
    padding: 20px;
    cursor: pointer;
  }
</style>
