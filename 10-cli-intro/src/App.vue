<template>
  <AppTitle msg="Intro to Vue CLI" />
  <AppList />
</template>

<script>
import AppTitle from "./components/AppTitle";
import AppList from "./components/AppList";

export default {
  name: "App",
  components: {
    AppTitle,
    AppList,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 90%;
  margin: 0 auto;
}
</style>
