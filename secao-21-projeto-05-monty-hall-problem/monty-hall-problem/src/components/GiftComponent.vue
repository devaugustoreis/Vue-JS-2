<template>
  <div class="master-gift">
    <div class="quarter" v-for="n in 4" :key="n"></div>
    <div class="cover"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.master-gift {
  width: 80px;
  height: 70px;
  background-color: rgb(192, 38, 38);
}

.cover {
  position: absolute;
  transform: translate(-6px, -12px);
  background-color: #26b144;
  height: 25px;
  width: 92px;
}

.quarter {
  position: absolute;
  background-color: rgb(14, 138, 14);
  height: 40%;
  width: 40%;

  &:nth-child(2) {
    right: 0;
  }

  &:nth-child(3) {
    bottom: 0;
  }

  &:nth-child(4) {
    bottom: 0;
    right: 0;
  }
}
</style>