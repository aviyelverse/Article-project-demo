<template>
  <HomePage />
</template>

<script>
import HomePage from "./components/HomePage.vue";

export default {
  name: "App",
  components: {
    HomePage,
  },
};
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  background-image: url("https://user-images.githubusercontent.com/37651620/155296438-0254b910-2a96-4e1c-9b70-da290607d90b.gif");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  height: 100vh;

  display: flex;
  flex-direction: column;
}
</style>
