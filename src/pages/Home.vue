<template>
  <section class="cards">
    <div class="card-col">
      <div class="card" v-for="card in data[0]" :key="card.name">
        <img :src="card.images.thumbnail" alt="wr" />
        <div class="title">
          <h2>{{ card.name }}</h2>
          <p>{{ card.artist.name }}</p>
        </div>
      </div>
    </div>
    <div class="card-col">
      <div class="card" v-for="card in data[1]" :key="card.name">
        <img :src="card.images.thumbnail" alt="wr" />
        <div class="title">
          <h2>{{ card.name }}</h2>
          <p>{{ card.artist.name }}</p>
        </div>
      </div>
    </div>
    <div class="card-col">
      <div class="card" v-for="card in data[2]" :key="card.name">
        <img :src="card.images.thumbnail" alt="wr" />
        <div class="title">
          <h2>{{ card.name }}</h2>
          <p>{{ card.artist.name }}</p>
        </div>
      </div>
    </div>
    <div class="card-col">
      <div class="card" v-for="card in data[3]" :key="card.name">
        <img :src="card.images.thumbnail" alt="wr" />
        <div class="title">
          <h2>{{ card.name }}</h2>
          <p>{{ card.artist.name }}</p>
        </div>
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
}
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
  }
}

@media (min-width: 1440px) {
  .cards {
    padding-left: 150px;
    padding-right: 150px;
  }
}
</style>
