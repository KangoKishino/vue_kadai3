<template>
  <div id="app">
    <TodoTable msg="ToDoリスト"/>
  </div>
</template>

<script>
import TodoTable from './components/TodoTable.vue'

export default {
  name: 'App',
  components: {
    TodoTable
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

td:nth-child(3) {
  width: 58px;
}

input {
  margin: 2px;
}
</style>
