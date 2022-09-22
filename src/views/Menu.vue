<template>
  <div class="about">
  <div class="cover">
  <FoodType
  :items=items2
  title='Sushi'
  />
  <FoodType
  :items=items
  title='Indian'
  />
  </div></div>
</template>

<script>
import FoodType from "../components/FoodType.vue";
import data from "../assets/data.json";
export default {
  name: "MenuPage",
  components: {
    FoodType,
  },
  data() {
    return {
      items: data.items,
      items2: data.items2,
    };
  },
};
</script>
<style>
.about {
  background: url("~@/assets/foodbg4.jpeg") left repeat;
  background-size: cover;
  min-height: 100vh;
  background-attachment: fixed;
}
</style>
