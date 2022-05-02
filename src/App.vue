<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    
    <TodoApp />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import TodoApp from './components/Todo.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    TodoApp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a,
    button {
        color: #4fc08d;
    }
    
    button {
        background: none;
        border: solid 1px;
        border-radius: 2em;
        font: inherit;
        padding: 0.75em 2em;
    }
    
    .container {
        max-width: 600px;
        margin: auto;
    }
    
    .button {
        cursor: pointer;
    }
    
    .custom-input {
        height: 35px;
        border-radius: 15px;
        border: 1px solid #ced4da;
        width: 200px;
    }
    /* =======list ======== */
    
    .list-group {
        display: flex;
        flex-direction: column;
        padding-left: 0;
        margin-bottom: 0;
        /* border-radius: 0.25rem; */
    }
    
    .list-group-item {
        position: relative;
        display: block;
        padding: 1.25rem 1.25rem;
        background-color: #fff;
        border: 1px solid rgba(0, 0, 0, .125);
    }
    
    .text-center {
        text-align: center;
    }
    
    .text-right {
        text-align: right;
    }
    
    .badge-green {
        background-color: green;
        color: #fff;
        padding: 10px 10px;
        border-radius: 15px;
    }
    
    .m-t-20 {
        margin-top: 20px;
    }
    
    .d-inline {
        display: inline;
    }
    
    .float-right {
        float: right;
    }
    
    .float-left {
        float: left;
    }
    
    .button-sm {
        padding: 5px 10px;
    }
    
    .text-danger {
        color: red;
    }
</style>
