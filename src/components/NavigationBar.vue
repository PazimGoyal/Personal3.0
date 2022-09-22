<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark">
    <!-- <a class="navbar-brand" href="#">Navbar</a> -->
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <router-link to="/"
            class="nav-link"
            v-on:mouseover="changeValue('Home')"
            v-on:mouseleave="mouseleave"
            >Home <span class="sr-only">(current)</span></router-link>

        </li>
        <li class="nav-item">
          <router-link to="/menu"
            v-on:mouseover="changeValue('Menu')"
            v-on:mouseleave="mouseleave"
            class="nav-link"
            >Menu</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/menu"
            class="nav-link"
            v-on:mouseover="changeValue('Order Now')"
            v-on:mouseleave="mouseleave"
            >Order Now</router-link>

        </li>
      </ul>
      -
    </div>
  </nav>


  <Transition>
    <div v-if="show" class="full_body">
      <div class="navbar_text">
        {{ navbarText }}
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: "NavigationBar",
  components: {},
  data() {
    return {
      navbarText: "",
      show: false,
    };
  },
  methods: {
    changeValue(value) {
      this.show = true;
      this.navbarText = value;
    },
    mouseleave() {
      this.show = false;
    },
  },
};
</script>

<style>
.navbar {
  cursor: pointer;
  background: rgba(255, 255, 255, 0.18);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(7.5px);
  border: 1px solid rgba(255, 255, 255, 0.01);
}
.full_body {
  position: absolute;
  display: flex;
  height: 100vh;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: start;
}
.navbar_text {
  display:flex;
  justify-content:center;
  align-items:center;
  height: 300px;
  width: 300px;
  text-align:center;
  font-size: 60px;
  color: #fff;
  padding: 50px;
  background: rgba(255, 255, 255, 0.18);
  border-radius: 100%;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  -webkit-backdrop-filter: blur(7.5px);
  border: 1px solid rgba(255, 255, 255, 0.01);
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.active{
  color:#756300;
}
</style>
