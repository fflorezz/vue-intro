<template>
  <div>
    <AppListInput @add-contact="addItem" />
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
  </div>
</template>

<script>
import AppListItem from "./AppListItem";
import AppListInput from "./AppListInput";

export default {
  components: {
    AppListItem,
    AppListInput,
  },
  methods: {
    removeItem(id) {
      this.contactList = this.contactList.filter(
        (contact) => contact.id !== id
      );
    },
    addItem(item) {
      item.id = this.idCount++;
      this.contactList.push(item);
    },
  },
  data() {
    return {
      contactList: [
        {
          id: 0,
          name: "Jhon Doe",
          phone: "0985 5652 65",
          email: "jhon@mail.com",
        },
        {
          id: 1,
          name: "Jane Doe",
          phone: "09565 5 656 5",
          email: "jane@mail.com",
        },
      ],
      idCount: 2,
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