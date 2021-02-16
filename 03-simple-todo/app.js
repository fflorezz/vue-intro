Vue.component("todo-item", {
  template:
    "\
    <li>\
      {{ title }}\
      <button v-on:click=\"$emit('remove')\">Remove</button>\
    </li>\
  ",
  props: ["title"],
});

new Vue({
  el: "#todo-list-example",
  data: {
    newTodoText: "",
    todos: [],
    nextTodoId: 0,
  },
  methods: {
    addNewTodo: function () {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText,
      });
      this.newTodoText = "";
    },
    removeTodo(todoId) {
      this.todos = this.todos.filter(t => t.id != todoId);
    },
  },
});
