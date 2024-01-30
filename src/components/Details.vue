<template>
  <div>{{ cardData[0].description }}</div>
</template>

<script>
import data from "../../data.json";
export default {
  data() {
    return {
      cardData: data,
    };
  },
  mounted() {
    this.cardData = data[this.$route.query.num].filter(
      (card) => card.name === this.$route.query.data
    );
    console.log(this.cardData);
  },
};
</script>

<style></style>
