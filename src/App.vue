<template>
  <h1>Hello world</h1>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
div {
  position: absolute;

  display: block;
  width: 500px;
  height: 500px;

  color: #ccc;

  font-size: 15px;

  background: #ccc;

  content: "";
}
</style>
