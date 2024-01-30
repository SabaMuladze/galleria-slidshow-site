<template>
  <section class="cards">
    <div class="card-col">
      <div class="card" v-for="card in data[0]" :key="card.name">
        <img :src="card.images.thumbnail" alt="wr" />
      </div>
    </div>
    <div class="card-col">
      <div class="card" v-for="card in data[1]" :key="card.name">
        <img :src="card.images.thumbnail" alt="wr" />
      </div>
    </div>
    <div class="card-col">
      <div class="card" v-for="card in data[2]" :key="card.name">
        <img :src="card.images.thumbnail" alt="wr" />
      </div>
    </div>
    <div class="card-col">
      <div class="card" v-for="card in data[3]" :key="card.name">
        <img :src="card.images.thumbnail" alt="wr" />
      </div>
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
  mounted() {},
};
</script>

<style scoped>
.cards {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 40px;
}
.card-col {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
</style>
