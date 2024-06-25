<template>
  <div class="complete-door">

    <div class="door" 
      @click="selectDoor()" 
      :class="{ 'selected': door.selected, 'open': door.open }">

      <span class="door-number" 
        :class="{ 'selected': door.selected, 'open': door.open }" >
        {{ door.id }}
      </span>

      <div class="door-knob" 
        :class="{ 'selected': door.selected, 'open': door.open }" 
        @click="openDoor()">
      </div>

      <GiftComponent v-if="door.correct" class="gift" />
    </div>

    <div class="baseboard"></div>

  </div>
</template>

<script>
import GiftComponent from './GiftComponent.vue'

export default {
  components: {
    GiftComponent
  },

  props: {
    doorParams: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      door: this.doorParams
    }
  },

  methods: {
    selectDoor() {
      if (!this.door.open) this.door.selected = !this.door.selected
    },

    openDoor() {
      this.door.selected = false
      this.door.open = true
    }
  }
}
</script>

<style scoped lang="scss">
$dark-brown: #5f2e0d;
$yellow: #fffc12;

.complete-door {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.door {
  position: relative;
  height: 250px;
  width: 150px;
  border-width: 4px 4px 0px 4px;
  border-style: solid;
  border-color: $dark-brown;
  background-color: #a55c2a;

  &.selected {
    border-color: $yellow;
  }

  &.open {
    background-color: transparent;
  }
}

.door-number {
  display: block;
  color: #fff;
  margin-top: 20px;
  font-size: 2.5rem;
  
  &.selected {
    color: $yellow;
  }

  &.open {
    display: none;
  }
}

.door-knob {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: $dark-brown;
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  
  &.selected {
    background-color: $yellow;
  }

  &.open {
    display: none;
  }
}

.gift {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
}

.baseboard {
  background-color: #a5a1a1;
  height: 8px;
  width: 160px;
}
</style>