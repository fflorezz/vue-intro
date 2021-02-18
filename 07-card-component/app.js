const Card = {
  template: "#card-template",
  props: ["card"],
};

const CardList = {
  template: "#card-list-template",
  data() {
    return {
      cards: [],
    };
  },
  components: {
    card: Card,
  },
  async created() {
    const response = await axios("https://randomuser.me/api/?results=10");
    const users = response.data.results;
    console.log(users);
    users.forEach(user => {
      const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        email: user.email,
        url: user.picture.large,
      };
      this.cards.push(newUser);
    });
  },
};

const app = new Vue({
  el: "#app",
  data: {
    message: "Card Component",
  },
  components: {
    "card-list": CardList,
  },
});
