<template>
  <form action="" @submit.prevent="addContact">
    <div>
      <label for="name">Name</label>
      <input type="text" v-model="inputName" />
    </div>
    <div>
      <label for="phone">Phone</label>
      <input type="text" v-model="inputPhone" />
    </div>
    <div>
      <label for="email">Email</label>
      <input type="text" v-model="inputEmail" />
    </div>
    <button>Add</button>
  </form>
</template>

<script>
export default {
  name: "AppListInput",
  data() {
    return {
      inputName: "",
      inputPhone: "",
      inputEmail: "",
    };
  },
  methods: {
    addContact() {
      this.$emit("add-contact", {
        name: this.inputName,
        phone: this.inputPhone,
        email: this.inputEmail,
      });
      this.inputName = "";
      this.inputPhone = "";
      this.inputEmail = "";
    },
  },
};
</script>

<style>
form {
  width: 300px;
  margin: 60px auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 25px;
}
label {
  margin-right: 10px;
  font-weight: 700;
}
</style>