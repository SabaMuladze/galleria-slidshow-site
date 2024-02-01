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
    return {
      show: true,
    };
  },
  computed: {},
  methods: {
    close() {
      this.show = !this.show;
    },
    getPicture(picture) {
      console.log(picture);
    },
  },
  mounted() {
    console.log();
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
