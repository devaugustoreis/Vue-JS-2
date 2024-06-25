<template>
  <div class="game-init">

    <div class="game-config-wrapper">
      <p>Quantas portas?</p>
      <input type="number" v-model="doorCount"> 
    </div>
    
    <div class="game-config-wrapper">
      <p>Qual porta é premiada?</p>
      <input type="number" v-model="correctDoorNumber"> 
    </div>

    <button class="game-btn" @click="startGame()">Iniciar</button>

  </div>
</template>

<script>
export default {
  data() {
    return {
      doorCount: 0,
      correctDoorNumber: 0
    }
  },

  methods: {
    startGame() {
      let gameData = {
        doors: this.doorCount,
        correctDoor: this.correctDoorNumber
      }

      this.$emit("gameStarted", gameData)
    }
  }
}
</script>

<style lang="scss">
.game-init {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.game-config-wrapper {
  display: flex;
  color: white;
  height: 35px;
  line-height: 35px;
  margin-bottom: 20px;
  
  p {
    font-size: 1.5rem;
  }
}

input {
  margin-left: 10px;
  width: 45px;
  border-radius: 4px;
  text-align: center;
  font-size: 1.2rem;
}

.game-btn {
  color: #975607;
  padding: 6px 10px;
  font-size: 1.2rem;
  font-weight: 600;
  border-radius: 6px;
  background: linear-gradient(90deg, hsla(33, 100%, 53%, 1) 0%, hsla(58, 100%, 68%, 1) 100%);
  cursor: pointer;
}

</style>