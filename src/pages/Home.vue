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
    };
  },
  mounted() {},
};
</script>

<style scoped>
.cards {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin-bottom: 24px;
  padding: 24px;
  justify-content: space-between;
}
.card-col {
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
}
.card,
.card img {
  height: 100%;
  width: 100%;
}
@media (min-width: 688px) {
  .cards {
    flex-direction: row;
    flex-wrap: wrap;
  }
  .card-col {
    width: 45%;
  }
  .card,
  .card img {
    height: 100%;
    width: 100%;
  }
}
</style>
