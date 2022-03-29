<template>
  <SpeedPicker />
</template>

<script>
import SpeedPicker from "./views/SpeedPicker.vue";

export default {
  name: "App",
  components: {
    SpeedPicker,
  },
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>
