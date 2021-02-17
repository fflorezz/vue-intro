const Item = {
  template: "#item-template",
  props: ["item", "current"],
  computed: {
    isActive() {
      return this.item == this.current;
    },
  },
};

const ItemList = {
  template: "#item-list-template",
  components: {
    item: Item,
  },
  data() {
    return {
      items: ["uno", "dos", "tres"],
      currentItem: null,
    };
  },
  methods: {
    selectItem(item) {
      this.currentItem = item;
    },
  },
};

const app = new Vue({
  el: "#app",
  data: {
    message: "Vue Local Components",
  },
  components: {
    "item-list": ItemList,
  },
});
