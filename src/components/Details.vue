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
  </section>
</template>

<script>
import data from "../../data.json";
export default {
  data() {
    return {
      cardData: data,
      window: "",
    };
  },
  mounted() {
    this.cardData = data[this.$route.query.num].filter(
      (card) => card.name === this.$route.query.data
    );
    console.log(this.cardData[0]?.images?.gallery);
    this.window = window.innerWidth;
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
};
</script>

<style scoped>
.cont {
  padding: 24px;
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
</style>
