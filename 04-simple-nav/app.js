Vue.component("tab-comp", {
  template: `
     <li class="tab-item"  v-on:click="$emit('change-tab', tab)">{{tab}}</li> 
  `,
  props: ["tab", "test"],
});

Vue.component("Home", {
  template: "<div>Home component</div>",
});

Vue.component("Main", {
  template: "<div>Main component</div>",
});

Vue.component("Other", {
  template: "<div>Other component</div>",
});

const app = new Vue({
  el: "#app",
  data: {
    tabs: ["Home", "Main", "Other"],
    currentTab: "Home",
  },
  methods: {
    test() {
      console.log("test");
    },
    changeTab(tab) {
      this.currentTab = tab;
    },
  },
});
