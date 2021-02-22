<template>
  <base-card>
    <base-button
      @click="selectTab('ResourceList')"
      :mode="tabMode('ResourceList')"
      >Stored Resources</base-button
    >
    <base-button
      @emit-click="selectTab('AddResource')"
      :mode="tabMode('AddResource')"
      >Add Resource</base-button
    >
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>
 
<script>
import BaseButton from '../UI/BaseButton.vue';
import BaseCard from '../UI/BaseCard.vue';
import ResourceList from './ResourceList';
import AddResource from './AddResource';

export default {
  components: { BaseCard, BaseButton, ResourceList, AddResource },
  data() {
    return {
      selectedTab: 'ResourceList',
    };
  },

  methods: {
    selectTab(tab) {
      this.selectedTab = tab;
    },
    tabMode(tab) {
      return this.selectedTab === tab ? 'flat' : null;
    },
  },

  provide() {
    return {
      selectTab: this.selectTab,
    };
  },
};
</script>

<style>
</style>
