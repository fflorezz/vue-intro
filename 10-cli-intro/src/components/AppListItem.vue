<template>
  <li class="list-item">
    <h3>{{ name }}</h3>
    <button @click="remove">Delete</button>
    <button @click="toggleDetails">
      {{ isDetailsVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-show="isDetailsVisible">
      <li><strong>Phone: </strong>{{ phone }}</li>
      <li><strong>Email: </strong>{{ email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  name: "AppListItem",
  props: {
    id: Number,
    name: String,
    phone: String,
    email: String,
  },
  data() {
    return {
      isDetailsVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.isDetailsVisible = !this.isDetailsVisible;
    },
    remove() {
      console.log("emiting remove");
      this.$emit("remove-item", this.id);
    },
  },
};
</script>

<style scoped>
.list-item {
  width: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  border: 1px solid rgb(179, 179, 179);
  padding: 20px;
  border-radius: 10px;
}
ul {
  list-style-type: none;
  padding: 0;
  margin-top: 20px;
}
</style>