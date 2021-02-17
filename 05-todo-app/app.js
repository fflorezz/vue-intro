Vue.component("todo-item", {
  template: "#todo-item-template",
  props: ["todo"],
});

Vue.component("todo-list", {
  template: "#todo-list-template",
  props: ["todos", "remove"],
});

const app = new Vue({
  el: "#app",
  data: {
    message: "Vue Todo App",
    todoTitle: "",
    todos: [
      {
        id: 1,
        title: "clean room",
        done: false,
      },
      {
        id: 2,
        title: "buy milk",
        done: true,
      },
    ],
  },
  methods: {
    removeTodo(todoId) {
      this.todos = this.todos.filter(todo => todo.id != todoId);
    },
    addTodo() {
      const todo = {
        id: this.todos.length + 1,
        title: this.todoTitle,
        done: false,
      };
      this.todos.push(todo);
      this.todoTitle = "";
    },
  },
});
