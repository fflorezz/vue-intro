<template>
  <h1>{{ user.name }}</h1>
  <h3>Articles</h3>
  <ul>
    <post-card
      v-for="post in userPosts"
      :key="post.id"
      :id="post.id"
      :userId="post.userId"
      :title="post.title"
      :body="post.body"
    ></post-card>
  </ul>
</template>

<script>
import PostCard from "./PostCard.vue";
export default {
  components: { PostCard },
  name: "UserPage",
  inject: ["posts", "users"],
  data() {
    return {
      user: null,
      userPosts: [],
    };
  },
  created() {
    const id = parseInt(this.$route.params.userId);
    this.user = this.users.find((user) => user.id === id);
    this.userPosts = this.posts.filter((post) => post.userId === id);
  },
};
</script>

<style scoped>
ul {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>