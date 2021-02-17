Vue.component("todo-item", {
  template: `
  <li>
      {{ title }}
      ******
      {{ date }}
      <button v-on:click="$emit('remove')">Remove</button>
  </li>
 `,
  props: ["title", "date"],
});

const app = new Vue({
  el: "#todo-list-example",
  data: {
    newTodoText: "",
    todos: [],
    nextTodoId: 0,
  },
  computed: {
    getDateComputed() {
      return new Date();
    },
  },
  methods: {
    getDateMethod() {
      return new Date();
    },
    addNewTodo() {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText,
        date: this.getDateMethod(),
      });
      this.newTodoText = "";
    },
    removeTodo(todoId) {
      this.todos = this.todos.filter(t => t.id != todoId);
    },
  },
});
