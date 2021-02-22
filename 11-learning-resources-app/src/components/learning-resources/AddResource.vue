<template>
  <base-card>
    <form action="" @submit.prevent="add">
      <div class="form-control">
        <label for="title">Title</label>
        <input v-model="titleInput" type="text" name="title" id="title" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          v-model="descriptionInput"
          rows="3"
          name="description"
          id="description"
        />
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input v-model="linkInput" type="url" name="link" id="link" />
      </div>
      <div>
        <base-button>Add Resource</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
import BaseButton from '../UI/BaseButton.vue';
import BaseCard from '../UI/BaseCard.vue';
export default {
  components: { BaseCard, BaseButton },
  inject: ['addResource', 'selectTab'],
  data() {
    return {
      titleInput: '',
      descriptionInput: '',
      linkInput: '',
    };
  },
  methods: {
    add() {
      const newResource = {
        id: new Date().toString(),
        title: this.titleInput,
        link: this.linkInput,
        description: this.descriptionInput,
      };
      this.addResource(newResource);
      this.titleInput = '';
      this.descriptionInput = '';
      this.linkInput = '';

      this.selectTab('ResourceList');
    },
  },
};
</script>

<style>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>