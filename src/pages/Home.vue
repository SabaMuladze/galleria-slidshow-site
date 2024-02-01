<template>
  <section class="cards">
    <div class="card-col">
      <router-link
        class="card"
        v-for="(card, index) in data[0]"
        :key="card.name"
        :to="{
          path: '/details/' + card.id,
          query: { num: 0, id: card.id },
        }"
      >
        <img :src="card.images.thumbnail" alt="wr" />
        <div class="title">
          <h2>{{ card.name }}</h2>
          <p>{{ card.artist.name }}</p>
        </div>
      </router-link>
    </div>
    <div class="card-col">
      <router-link
        class="card"
        v-for="(card, index) in data[1]"
        :key="card.name"
        :to="{
          path: '/details/' + card.id,
          query: { num: 1, id: card.id },
        }"
      >
        <img :src="card.images.thumbnail" alt="wr" />
        <div class="title">
          <h2>{{ card.name }}</h2>
          <p>{{ card.artist.name }}</p>
        </div>
      </router-link>
    </div>
    <div class="card-col">
      <router-link
        class="card"
        v-for="(card, index) in data[2]"
        :key="card.name"
        :to="{
          path: '/details/' + card.id,
          query: { num: 2, id: card.id },
        }"
      >
        <img :src="card.images.thumbnail" alt="wr" />
        <div class="title">
          <h2>{{ card.name }}</h2>
          <p>{{ card.artist.name }}</p>
        </div>
      </router-link>
    </div>
    <div class="card-col">
      <router-link
        class="card"
        v-for="(card, index) in data[3]"
        :key="card.name"
        :to="{
          path: '/details/' + card.id,
          query: { num: 3, id: card.id },
        }"
      >
        <img :src="card.images.thumbnail" alt="wr" />
        <div class="title">
          <h2>{{ card.name }}</h2>
          <p>{{ card.artist.name }}</p>
        </div>
      </router-link>
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
  methods: {},
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

.card {
  position: relative;
}
.title {
  display: flex;
  flex-direction: column;
  position: relative;
  bottom: 33px;
  left: 32px;
}
h2 {
  position: absolute;
  color: white;
  bottom: 20px;
}
p {
  position: absolute;
  bottom: 0;
  opacity: 0.7528;
  color: white;
}
img {
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.84) 100%
  );
  transition: 0.3s;
}
.card::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0);
  z-index: 1;
  transition: 0.3s;
}
/* .card a {
  display: block;
  height: 100%;
  z-index: 1000;
  position: relative;
} */
@media (min-width: 688px) {
  .cards {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0;
  }
  .card-col {
    width: 48%;
  }
  .card img {
    height: 100%;
    width: 100%;
  }
}

@media (min-width: 1024px) {
  .card-col {
    width: 23%;
  }

  .cards {
    padding-left: 50px;
    padding-right: 50px;
  }
  .card {
    cursor: pointer;
    border-radius: 10px;
  }
  .card:hover::after {
    background-color: rgba(255, 255, 255, 0.199);
  }
}

@media (min-width: 1440px) {
  .cards {
    padding-left: 150px;
    padding-right: 150px;
  }
}
</style>
