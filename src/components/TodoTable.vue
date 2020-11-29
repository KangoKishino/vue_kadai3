<template>
  <div class="todo-table">
    <h1>{{ msg }}</h1>
    <input type="radio" v-model="status" value="all" checked="checked">
    <label for="all">すべて</label>
    <input type="radio" v-model="status" value="running">
    <label for="running">作業中</label>
    <input type="radio" v-model="status" value="finish">
    <label for="finish">完了</label>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>コメント</th>
          <th colspan="2">状態</th>
        </tr>
      </thead>
      <tbody id="list">
        <tr v-for="todo in todos" :key="todo.id">
          <td>{{ todo.id }}</td>
          <td>{{ todo.todo }}</td>
          <td>
            <button @click="checkTodo(todo.id)">{{ taskStatus(todo) }}</button>
          </td>
          <td>
            <button @click="deleteTodo(todo.id)">削除</button>
          </td>
        </tr>
      </tbody>
    </table>
    <h3>新規タスクの追加</h3>
    <input type="text" v-model="inputTodo">
    <input type="submit" value="追加" @click="submitTodo">
  </div>
</template>

<script>
export default {
  name: 'TodoTable',
  props: {
    msg: String
  },
  methods: {
    submitTodo() {
      const createTodo = {
        id: this.$store.getters.todos.length,
        todo: this.inputTodo,
        isDone: false
      }
      this.$store.commit('createTodo', createTodo)
      this.inputTodo = ''
    },
    taskStatus(row) {
      return row.isDone ? '完了' : '作業中'
    },
    checkTodo(id) {
        this.$store.commit('checkTodo', id)
    },
    deleteTodo(id) {
      this.$store.commit('deleteTodo', id)
    }
  },
  computed: {
    status: {
      get() {
        return this.$store.getters.nowStatus;
      },
      set(value) {
        this.$store.commit('status', value);
      }
    },
    todos() {
      const self = this
      return this.$store.getters.todos.filter(
        function(value) {
          if (self.status === 'all') {
            return value
          } else if (self.status === 'running') {
            return value.isDone === false
          } else {
            return value.isDone === true
          }
        }
      )
    },
  }
}
</script>


