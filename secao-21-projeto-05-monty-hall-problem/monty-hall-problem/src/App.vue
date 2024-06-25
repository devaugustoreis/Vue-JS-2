<template>
  <div>
    <h1 class="game-title">Problema de Monty Hall</h1>
    <InitGame v-if="!gameStarted" @gameStarted="startGame($event)" />
    <GameComponent v-else :gameData="gameData" @endGame="gameStarted = false"/>
  </div>
</template>

<script>
import InitGame from "./components/InitGame.vue";
import GameComponent from "./components/GameComponent.vue"

export default {
  components: {
    InitGame,
    GameComponent
  },

  data() {
    return {
      gameStarted: false,
      gameData: { doors: 0, correctDoor: 0 }
    }
  },

  methods: {
    startGame(gameData) {
      this.gameData.doors = gameData.doors
      this.gameData.correctDoor = gameData.correctDoor
      this.gameStarted = true
    }
  }
}
</script>

<style>
.game-title {
  color: #fff;
  border: 1px solid rgb(34, 34, 34);
  background-color: rgba(34, 34, 34, 0.25);
  display: inline-block;
  margin-top: 20px;
  margin-bottom: 70px;
  padding: 10px 15px;
}
</style>
