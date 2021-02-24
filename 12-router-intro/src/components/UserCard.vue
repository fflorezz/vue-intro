<template>
  <div class="user-card">
    <h2>{{ name }}</h2>
    <h4>{{ email }}</h4>
  </div>
</template>

<script>
export default {
  name: "UserCard",
  props: ["name", "email"],
};
</script>

<style scoped>
.user-card {
  margin-top: 10px;
  border: 1px solid gray;
  padding: 10px;
  width: 300px;
}
</style>