<template>
  <TheHeader title="My App" />
  <the-resources></the-resources>
</template>

<script>
import TheHeader from './components/layouts/TheHeader';
import TheResources from './components/learning-resources/TheResources.vue';
export default {
  components: {
    TheHeader,
    TheResources,
  },
  data() {
    return {
      storedResources: [
        {
          id: new Date().toISOString(),
          title: 'Official Guide',
          description: 'The official Vue documentation',
          link: 'https://vuejs.org',
        },
        {
          id: new Date().toISOString(),
          title: 'Official Guide',
          description: 'The official Vue documentation',
          link: 'https://vuejs.org',
        },
      ],
    };
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: (resource) => {
        this.storedResources.unshift(resource);
      },
      removeResource: (id) => {
        const res = this.storedResources.find((res) => res.id === id);
        const resIdx = this.storedResources.indexOf(res);
        this.storedResources.splice(resIdx, 1);
      },
    };
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>