<template>
  <section class="cards">
    <div class="card" v-for="card in data" :key="card.name">
      <img :src="card.images.thumbnail" alt="wr" />
    </div>
  </section>
</template>

<script>
import data from "../../data.json";
export default {
  data() {
    return {
      data,
      thumb: "../assets/starry-night/thumbnail.jpg",
    };
  },
  mounted() {
    fetch("../../data.json")
      .then((response) => response.json())
      .then((data) => {
        this.items = data;
        console.log(this.items);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    console.log(this.thumb);
  },
};
</script>

<style></style>
