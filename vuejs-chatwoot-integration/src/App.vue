<template>
  <HomePage />
  <ChatwootWidget />
</template>

<script>
import HomePage from "./components/HomePage.vue";
import ChatwootWidget from "./components/ChatwootWidget.vue";

export default {
  name: "App",
  components: {
    HomePage,
    ChatwootWidget,
  },
};
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  background-image: url("./assets/Back.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  height: 100vh;

  display: flex;
  flex-direction: column;
}
</style>
