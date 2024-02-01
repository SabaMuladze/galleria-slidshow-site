<template>
  <div v-if="show" class="show-img">
    <button @sendData="getPicture" @click="close">close</button>
    <img :src="'.' + this.cardData[0]?.images?.hero.small" alt="" />
  </div>
  <section class="cont">
    <div class="parent">
      <button @click="open" class="view-pic">View Picture</button>
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

  <span
    :style="{ width: nextId - 1 + window, maxWidth: '100%' }"
    class="line"
  ></span>
  <footer>
    <div>
      <h2 class="next-h2">{{ cardData[0]?.name }}</h2>
      <p class="next-p">{{ cardData[0]?.artist?.name }}</p>
    </div>
    <div class="arrows">
      <button>
        <img src="../../public/assets/shared/icon-back-button.svg" alt="" />
      </button>
      <button @click="nextCard">
        <img src="../../public/assets/shared/icon-next-button.svg" alt="" />
      </button>
    </div>
  </footer>
</template>

<script>
import data from "../../data.json";
export default {
  emits: ["sendData"],
  data() {
    return {
      cardData: data,
      data,
      window: "",
      pic: 0,
      nextNum: parseInt(this.$route.query.num) + 1,
      id: this.$route.query.id,
      nextId: parseInt(this.$route.query.id),
      fullData: data[0].concat(data[1]).concat(data[2]).concat(data[3]),
      nextData: 0,
      totalParts: "",
      show: true,
    };
  },
  computed: {
    heroes() {
      if (window.innerWidth > "688px") {
        return this.cardData[0]?.images?.hero.large;
      } else {
        return this.cardData[0]?.images?.hero.small;
      }
    },
  },
  mounted() {
    this.cardData = this.fullData.filter((card) => card.id == this.nextId);
    this.window = window.innerWidth;
    this.nextData = this.fullData.filter((card) => card.id > this.nextId);
    console.log(this.nextData[0]?.name);
  },
  methods: {
    nextCard() {
      if (this.nextId < 15) {
        this.cardData = this.fullData.filter((card) => card.id > this.nextId);
        this.$router.push({ query: { num: this.nextId, id: this.nextId++ } });
      }
    },
    close() {
      this.show = false;
    },
    open() {
      this.show = true;
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
.next-h2 {
  font-size: 14px;
}
.next-p {
  font-size: 10px;
}
.line {
  background-color: black;
  height: 2px;
  display: block;
}
.view-pic {
  padding: 15px 20px;
  color: white;
  background-color: rgba(0, 0, 0, 0.411);
  font-size: 12px;
  position: relative;
  top: 64px;
  left: 20px;
}
.show-img {
  display: flex;
  flex-direction: column;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.63);
  min-height: 110% !important;
  width: 100% !important;
  z-index: 1000;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
  bottom: 0px;
}
.show-img img {
  max-width: 90%;
}
</style>
