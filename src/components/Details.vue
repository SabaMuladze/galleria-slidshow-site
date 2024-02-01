<template>
  <div v-if="show" class="show-img">
    <div class="show-parent">
      <button class="close-pic" @click="close">CLOSE</button>
      <img class="modal-pic" :src="'.' + heroes" alt="" />
    </div>
  </div>
  <section class="cont">
    <main>
      <div class="parent">
        <button @click="open" class="view-pic">View Picture</button>
        <img class="pic" :src="'.' + heroes" alt="" />
        <div class="white-box">
          <h2>{{ cardData[0].name }}</h2>
          <p class="artist-name">{{ cardData[0].artist?.name }}</p>
          <img class="portrait" :src="'.' + cardData[0].artist?.image" alt="" />
        </div>
      </div>
      <div class="description-div">
        <p class="desc">{{ cardData[0].description }}</p>
        <div class="store">
          <a target="_blank" :href="cardData[0]?.source">GO TO SOURCE</a>
        </div>
      </div>
    </main>
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
      <button @click="previousCard">
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
      id: this.$route.query.id,
      nextId: parseInt(this.$route.query.id),
      fullData: data[0].concat(data[1]).concat(data[2]).concat(data[3]),
      nextData: 0,
      show: false,
    };
  },
  computed: {
    heroes() {
      if (window.innerWidth > 720) {
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
    console.log(this.fullData.filter((card) => card.id > this.nextId));
    this.heroes;
  },
  methods: {
    nextCard() {
      if (this.nextId < 15) {
        this.cardData = this.fullData.filter((card) => card.id > this.nextId);
        this.$router.push({ query: { id: this.nextId++ } });
      }
    },
    previousCard() {
      if (this.nextId >= 1) {
        this.cardData = this.fullData.filter((card) => card.id == this.nextId);
        this.$router.push({ query: { id: this.nextId-- } });
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  gap: 50px;
}
.pic {
  width: 100%;
}
.parent {
  max-height: 550px;
  max-width: 475px;
  position: relative;
}
h2 {
  color: black;

  font-size: 24px;
}
p {
  opacity: 0.7528;
  line-height: 30px;
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
  margin-top: 125px;
  max-width: 460px;
}
.store {
  margin-top: 50px;
}
a {
  color: #7d7d7d;
  font-size: 12px;
}
footer {
  display: flex;
  justify-content: space-between;
  padding: 24px 24px 24px 24px;
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
  position: fixed;
  background-color: rgba(0, 0, 0, 0.63);
  min-height: 100% !important;
  width: 100% !important;
  z-index: 1000;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
  bottom: 0px;
}
.show-img img {
  max-width: 90%;
  margin: auto;
}
.close-pic {
  border: none;
  outline: none;
  background-color: transparent;
  color: white;
  font-size: 18px;
  position: relative;
  bottom: 30px;
}
.show-parent {
  display: flex;
  width: fit-content;
  flex-direction: column;
  align-items: end;
}
main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.description-div {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
@media (min-width: 720px) {
  .white-box {
    min-width: 450px;
    min-height: 240px;
    bottom: 725px;
    left: 222.5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: start;
  }
  .portrait {
    height: 128px;
    width: 128px;
    bottom: -128px;
    left: 270px;
  }
  h2 {
    font-size: 56px;
  }
  main {
    width: 100%;
    gap: 100px;
  }
  main:first-child {
    left: 0;
  }
  .desc {
    margin: 100px auto 0 auto;
  }

  .pic,
  .parent {
    max-height: 720px;
    max-width: 618px;
  }
  .artist-name {
    position: relative;
    top: 10px;
    left: -105px;
  }
  .modal-pic {
    height: 700px;
    margin-top: 50px;
  }
}
@media (min-width: 1280px) {
  main {
    flex-direction: row;
  }
  .desc {
    margin-left: 0;
  }
}
.white-box {
  left: 322.5px;
}
@media (min-width: 1440px) {
  .description-div {
    width: 40%;
  }
  .cont {
    padding: 0 24px 24px 40px;
  }
  .white-box {
    left: 400.5px;
  }
}
</style>
