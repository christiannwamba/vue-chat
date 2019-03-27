<template>
  <div id="app">
    <Header />
    <Chat/>
  </div>
</template>

<script>
import Chat from "./components/Chat";
import Header from './components/Header';

export default {
  name: "app",
  components: {
    Chat,
    Header
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 70%;
  margin: auto;
}
</style>
