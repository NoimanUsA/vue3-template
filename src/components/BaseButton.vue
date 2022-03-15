<template>
  <button @click="$emit('click')" class="base-button">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "BaseButton",
  setup() {},
});
</script>

<style lang="scss" scoped>
.base-button {
  padding: 2px 20px;

  color: #fff;
  font-size: 18px;

  background-color: rgb(8 184 238);
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:active {
    transform: translateY(1px);
  }
}
</style>
