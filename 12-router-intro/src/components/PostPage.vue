<template>
  <h2>{{ post.title }}</h2>
  <br />by <br />
  <h4>{{ user.name }}</h4>
  <p>{{ post.body }}</p>
</template>

<script>
export default {
  inject: ["posts", "users"],
  data() {
    return {
      post: null,
      user: null,
    };
  },
  created() {
    const id = this.$route.params.postId;
    const post = this.posts.find((post) => post.id === parseInt(id));
    const user = this.users.find((user) => user.id === post.userId);
    this.user = user;
    this.post = post;
  },
};
</script>

<style>
</style>