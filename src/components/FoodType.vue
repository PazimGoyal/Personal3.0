<template>
  <div class="category">
    <div class="title">
      <h2>{{ title }}</h2>
    </div>
    <div class="sub_menu">
      <div class="item" v-for="(item, val) in items" :key="val">
        <FoodCard :item="item" />
      </div>
    </div>
  </div>
</template>
<script>
import FoodCard from "./FoodCard.vue";
export default {
  name: "FoodType",
  props: ["items", "title"],
  components: {
    FoodCard,
  },
  data(){
return{
    logos:[
        '<font-awesome-icon icon="fa-solid fa-bowl-food" />',
        '<font-awesome-icon icon="fa-solid fa-utensils" />',
        '<font-awesome-icon icon="fa-solid fa-spoon" />'


    ]
};
  }
};
</script>
<style>
.category {
    margin-bottom:10px;
  padding: 0px 1rem;
  display:flex;
  flex-direction:column;
  justify-content:center;
}
.title {
  font-family: cursive;
  padding: 0px 4rem;
  text-align:center;
  color:#756300;
  text-shadow:1px 1px 0px #000,2px 2px 0px #756300;
}

.sub_menu {

  display: grid;
  grid-template-columns: repeat(auto-fit, 16rem);
  align-items:center;
  width:100%;
  justify-content:center;
  grid-gap:5px 0px;
}
</style>
