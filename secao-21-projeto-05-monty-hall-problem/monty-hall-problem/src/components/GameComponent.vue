<template>
  <div>
    <button class="game-btn" @click="restartGame()">Reiniciar</button>
    <div class="game">
      <DoorComponent 
        v-for="door in allDoors" :key="door.id" 
        :doorParams="door"
      />    
    </div>
  </div>
</template>

<script>
import DoorComponent from './DoorComponent.vue'

export default {
  components: {
    DoorComponent
  },

  props: {
    gameData: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      allDoors: []
    }
  },

  created() {
    for (let i = 1; i <= this.gameData.doors; i++) {
      const door = {
        id: i,
        selected: false,
        open: false,
        correct: i == this.gameData.correctDoor ? true : false
      }

      this.allDoors.push(door)
    }
  },

  methods: {
    restartGame() {
      this.$emit("endGame", false)
    }
  }
}
</script>

<style scoped>
.game {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 50px 20px;
}

.game-btn {
  margin-bottom: 30px;
}
</style>