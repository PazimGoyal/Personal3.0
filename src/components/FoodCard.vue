<template lang="">
  <div class="card" style="width: 15rem">
    <div v-if="'tag' in item" class="tag">{{ item["tag"] }}</div>
    <img v-if="'img' in item" :src="getImage(item['img'])" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title text-truncate">{{ item["name"] }}</h5>
      <p class="card-text">{{ item["description"] }}</p>
      <hr>
      <div class="additional">
        <div v-if="'price' in item">
          {{ item["price"] }}
          <div class="old_price" v-if="'old_price' in item">
            {{ item["old_price"] }}
          </div>
          <div v-else>
            <span class="hidden">-</span>
          </div>
        </div>
        <div class="spice" v-if="'spice' in item">
          <span v-for="i in item['spice']" :key="i">
            <font-awesome-icon icon="fa-solid fa-pepper-hot" />
          </span>
        </div>
        <div class="veg" v-if="'veg' in item">
          <font-awesome-icon icon="fa-solid fa-leaf" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "FoodCard",
  props: ["item"],
  data() {
    return {
    };
},
  methods: {
    getSpice(spice) {
      if (spice == 3) return "";
    },
    getImage(image){
      return require('../assets/'+image)
    }
  },
};
</script>
<style>
.card {
  border-radius: 15px;
  overflow: hidden;
/* From https://css.glass */
background: rgba(0, 0, 0, 0.9);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
border: 1px solid #756300;
color:#756300;
  cursor:pointer;
  transition: box-shadow 0.5s;
}
.card:hover{
box-shadow: 0px 4px 10px rgba(0, 0, 0, 1);
}
.card-text {
  overflow: scroll;
  height: 5rem;
color:white;
}
.card img {
  border-top-radius: 15px;
  height:13rem;
  object-fit:cover;
}
.tag {
  position: absolute;
  padding: 3px;
  background: rgba(255, 255, 255, 0.5);
  border-bottom-right-radius: 15px;
}
hr{
  color: #756300;
  background:#756300;
}
.additional {
  display: grid;
  color:white;

  grid-template-columns: repeat(3, 1fr);
  justify-content:center;
  align-items:center;
  text-align:center;
}
.additional > div{
  text-align:center;
}
.old_price {
  text-decoration: line-through red;

  font-size: small;
  font-weight: bold;
}
.spice:hover {
  color:red;
}
.veg :hover{
  color:green;
}
.hidden {
  text-decoration: none;
  color: transparent;
}
</style>
