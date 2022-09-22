<template>
<div>
  <div class="main">
    <div class="center">
          <div class="logo">
          </div>
      <div>
        <div class="name">
            <img :src="logo" />
          <div>
            Golden <br />
            Times 
          </div>
        </div>
      </div>
    </div>
    <div></div>
  </div>
  <ContactUs/>
  </div>
</template>

<script>
import logo from "@/assets/icon1.png";
import ContactUs from "./ContactUs.vue"
export default {
  name: 'HomePage',
  components: {
    ContactUs
  },
  data() {
    return {
      logo: logo,
    };
  },
};
</script>

<style>
.main {
  height: 100vh;
  background: url("~@/assets/indianFood1.jpeg") left no-repeat;
  background-size: cover;
  color:#756300;
}
.center {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 100%;
}
.name {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items:center;
  width:70vw;
  height:50vh;  
  font-size: 70px;
  color: #756300;
  font-family: cursive;
  text-shadow: 2px 2px black;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.5px);
  -webkit-backdrop-filter: blur(7.5px);
  border: 1px solid rgba(255, 255, 255, 0.01);
}
.logo {   
  height:50vh;
  width:30vw;
}
img {
  
  max-height: 80%;
}
</style>
