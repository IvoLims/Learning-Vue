function getRandomAttack(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const app = Vue.createApp({
  data() {
    return {
      healthPlayer: 100,
      healthMonster: 100,
      currentRound: 0,
      winner: null,
      logs: [],
    };
  },

  computed: {
    monsterBarStyles() {
      if (this.healthMonster < 0) {
        return { width: "0%" };
      }
      return { width: this.healthMonster + "%" };
    },
    playerBarStyles() {
      if (this.healthPlayer < 0) {
        return { width: "0%" };
      }
      return { width: this.healthPlayer + "%" };
    },
    mayUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
  },
  watch: {
    healthPlayer(value) {
      if (value <= 0 && this.healthMonster <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "monster";
      }
    },

    healthMonster(value) {
      if (value <= 0 && this.healthPlayer <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "player";
      }
    },
  },
  methods: {
    startNewGame() {
      this.healthPlayer = 100;
      this.healthMonster = 100;
      this.currentRound = 0;
      this.winner = null;
      this.logs = [];
    },
    attackMonster() {
      this.currentRound++;
      const damageMonster = getRandomAttack(5, 20);
      this.healthMonster = this.healthMonster - damageMonster;
      this.addLogMessage("player", "attacked", damageMonster);
      this.attackPlayer();
    },
    attackPlayer() {
      const damagePlayer = getRandomAttack(9, 23);
      this.healthPlayer = this.healthPlayer - damagePlayer;
      this.addLogMessage("monster", "attacked", damagePlayer);
    },
    specialAttack() {
      this.currentRound++;
      const attackValue = getRandomAttack(13, 25);
      this.healthMonster -= attackValue;
      this.addLogMessage("player", "special attacked", attackValue);
      this.attackPlayer();
    },
    healPlayer() {
      this.currentRound++;
      const healValue = getRandomAttack(7, 17);
      if (this.healthPlayer + healValue <= 100) {
        this.healthPlayer += healValue;
      } else {
        healValue = 0;
        this.healthPlayer = 100;
      }
      this.addLogMessage("player", "healed", healValue);
      this.attackPlayer();
    },
    surrender() {
      this.winner = "monster";
    },
    addLogMessage(attacker, what, value) {
      this.logs.unshift({
        actionBy: attacker,
        actionType: what,
        actionValue: value,
      });
    },
  },
});

app.mount("#game");
