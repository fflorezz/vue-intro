<template>
  <div class="about">
    <h1>POSTS PAGE</h1>
    <ul>
      <post-card
        v-for="post in posts"
        :key="post.id"
        :title="post.title"
        :body="post.body"
        :userId="post.userId"
      ></post-card>
    </ul>
  </div>
</template>

<script>
import PostCard from "../components/PostCard.vue";

export default {
  components: { PostCard },
  name: "Posts",
  inject: ["posts"],
};
</script>

<style scoped>
ul {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
