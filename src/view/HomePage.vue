<template>
  <div class="home-page">
    <h1>Count: {{ count }}</h1>
    <div class="home-page__buttons">
      <base-button @click="increment">+</base-button>
      <base-button @click="decrement">-</base-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import BaseButton from "@/components/BaseButton.vue";

export default defineComponent({
  name: "HomePage",
  components: {
    BaseButton,
  },
  setup() {
    const count = ref(0);
    function increment() {
      count.value += 1;
    }
    function decrement() {
      count.value -= 1;
    }
    return {
      count,
      increment,
      decrement,
    };
  },
});
</script>

<style lang="scss">
.home-page {
  display: grid;
  place-items: center;

  &__buttons {
    display: flex;
    gap: 5px;
  }
}
</style>
