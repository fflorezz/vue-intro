<template>
  <div class="post-card">
    <h2>{{ title }}</h2>
    <br />by <br />
    <h4>{{ userName }}</h4>
    <p>{{ body }}</p>
  </div>
</template>

<script>
export default {
  name: "PostCard",
  props: ["title", "body", "userId"],
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
  border: 1px solid gray;
  width: 600px;
  margin-top: 10px;
  padding: 10px;
}
</style>