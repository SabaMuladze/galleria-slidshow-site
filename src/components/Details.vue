<template>
  <section class="cont">
    <div class="parent">
      <img class="pic" :src="'.' + heroes" alt="" />
      <div class="white-box">
        <h2>{{ cardData[0].name }}</h2>
        <p>{{ cardData[0].artist?.name }}</p>
        <img class="portrait" :src="'.' + cardData[0].artist?.image" alt="" />
      </div>
    </div>
    <p class="desc">{{ cardData[0].description }}</p>
    <div class="store">
      <a target="_blank" :href="cardData[0]?.source">GO TO SOURCE</a>
    </div>
  </section>
  <footer>
    <div></div>
    <div class="arrows">
      <router-link to="/">
        <img src="../../public/assets/shared/icon-back-button.svg" alt="" />
      </router-link>
      <button @click="nextCard">
        <img src="../../public/assets/shared/icon-next-button.svg" alt="" />
      </button>
    </div>
  </footer>
</template>

<script>
import data from "../../data.json";
export default {
  data() {
    return {
      cardData: data,
      data,
      window: "",
      nextNum: parseInt(this.$route.query.num) + 1,
      pic: 0,
      id: this.$route.query.id,
      nextId: parseInt(this.$route.query.id),
      slide: null,
      fullData: data[0].concat(data[1]).concat(data[2]).concat(data[3]),
    };
  },
  computed: {
    heroes() {
      if (this.window > "688px") {
        return this.cardData[0]?.images?.hero.large;
      } else {
        return this.cardData[0]?.images?.hero.small;
      }
    },
  },
  mounted() {
    this.cardData = this.fullData.filter((card) => card.id == this.nextId);
    this.window = window.innerWidth;
    console
      .log
      // (this.cardData = this.fullData.filter((card) => card.id == 15))
      ();
  },
  methods: {
    nextCard() {
      if (this.nextId < 15) {
        this.cardData = this.fullData.filter((card) => card.id > this.nextId);
      }
      this.$router.push({ query: { num: this.nextId, id: this.nextId++ } });
    },
  },
};
</script>

<style scoped>
.cont {
  min-height: 100vh;
  padding: 0 24px 24px 24px;
}
.pic {
  width: 100%;
}
.parent {
  max-height: 450px;
  max-width: 475px;
  position: relative;
}
h2 {
  color: black;

  font-size: 24px;
}
p {
  opacity: 0.7528;
  color: #7d7d7d;
}

.white-box {
  width: 280px;
  min-height: 104px;
  position: relative;
  bottom: 54px;
  background-color: white;
  padding: 24px;
}
.portrait {
  position: absolute;
  height: 64px;
  width: 64px;
  bottom: -64px;
}
.desc {
  margin-top: 120px;
}
.store {
  margin-top: 50px !important;
}
a {
  color: #7d7d7d;
  font-size: 12px;
}
footer {
  display: flex;
  justify-content: space-between;
  padding: 0 24px 24px 24px;
}

.arrows {
  display: flex;
  gap: 20px;
}
button {
  border: none;
  outline: none;
  background-color: white;
}
</style>
