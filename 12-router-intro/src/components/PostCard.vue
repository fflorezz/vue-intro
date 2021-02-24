<template>
  <router-link :to="`/posts/${id}`">
    <div class="post-card">
      <h2>{{ title }}</h2>
      <br />by <br />
      <h4>{{ userName }}</h4>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "PostCard",
  props: ["title", "body", "userId", "id"],
  inject: ["users"],
  computed: {
    userName() {
      const user = this.users.find((user) => {
        return user.id === this.userId;
      });
      return user.name;
    },
  },
};
</script>

<style scoped>
.post-card {
  cursor: pointer;
  border: 1px solid gray;
  width: 600px;
  margin-top: 10px;
  padding: 10px;
}
a {
  text-decoration: none;
  color: inherit;
}
.post-card:hover {
  border-color: rgb(135, 240, 135);
}
</style>