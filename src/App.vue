<template>
  <Header></Header>
  <section>
    <router-view></router-view>
  </section>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  components: {
    Header,
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {
    // this.checkPath();
    if (performance.navigation.type === 1) {
      // Modify the path to '/'
      window.location.pathname = "/";
    }
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&display=swap");

* {
  font-family: "Libre Baskerville", serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  height: 100vh;
}
</style>
