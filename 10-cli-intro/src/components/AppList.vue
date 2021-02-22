<template>
  <ul>
    <AppListItem
      v-for="contact in contactList"
      :key="contact.id"
      :id="contact.id"
      :name="contact.name"
      :phone="contact.phone"
      :email="contact.email"
      @remove-item="removeItem"
    />
  </ul>
</template>

<script>
import AppListItem from "./AppListItem";

export default {
  components: {
    AppListItem,
  },
  methods: {
    removeItem(id) {
      this.contactList = this.contactList.filter(
        (contact) => contact.id !== id
      );
    },
  },
  data() {
    return {
      contactList: [
        {
          id: 1,
          name: "Jhon Doe",
          phone: "0985 5652 65",
          email: "jhon@mail.com",
        },
        {
          id: 2,
          name: "Jane Doe",
          phone: "09565 5 656 5",
          email: "jane@mail.com",
        },
      ],
    };
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  margin-top: 40px;
}
</style>