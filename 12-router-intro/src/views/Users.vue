<template>
  <div>
    <h1>USERS PAGE</h1>
    <ul>
      <user-card
        v-for="user in users"
        :key="user.id"
        :id="user.id"
        :name="user.name"
        :email="user.email"
      ></user-card>
    </ul>
  </div>
</template>

<script>
import UserCard from "../components/UserCard.vue";

export default {
  name: "Users",
  components: {
    UserCard,
  },
  inject: ["users"],
};
</script>

<style scoped>
ul {
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>;
