const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      specialAttackCounter: 0,
    };
  },
  methods: {
    attackMonster() {
      this.specialAttackCounter++;
      const attackValue = Math.floor(Math.random() * (12 - 5)) + 5;
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = Math.floor(Math.random() * (12 - 5)) + 5;
      this.playerHealth -= attackValue;
    },
    specialAttackMonster() {
      const attackValue = Math.floor(Math.random() * (25 - 10)) + 10;
      this.monsterHealth -= attackValue;
      console.log("special attack: ", this.monsterHealth);
      this.specialAttackCounter = 0;
      this.attackPlayer();
    },
    healPlayer() {
      const healValue = Math.floor(Math.random() * (20 - 8)) + 8;
      if (this.playerHealth + healValue > 100) this.playerHealth = 100;
      else this.playerHealth += healValue;
    },
  },
  computed: {
    monsterBarStyles() {
      return {
        width: this.monsterHealth < 0 ? "0%" : this.monsterHealth + "%",
      };
    },
    playerBarStyles() {
      return { width: this.playerHealth < 0 ? "0%" : this.playerHealth + "%" };
    },
    isSpecialAttackDisabled() {
      return this.specialAttackCounter < 3;
    },
  },
});

app.mount("#game");
