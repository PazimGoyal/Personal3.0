<template lang="">
  <div class="contactus">
    <div class="info row">
      <div class="timings col-4">
        <span
          ><h2><font-awesome-icon icon="fa-regular fa-clock" /></h2
        ></span>
        <div>We are open</div>
        <div>
          <span>Monday</span> to <span>Friday </span> 10:00 am to 12:00 PM
          <br />&amp;<br />
          Noon to 10:00 PM on <span>Weekends</span>
        </div>
      </div>
      <div class="centerd col-4">Pazim Goyal</div>
      <div class="address col-4">
        <span
          ><h2><font-awesome-icon icon="fa-solid fa-map-location" /></h2
        ></span>
        <div>#716, 2871 Richmond Road</div>
        <div>Ottawa, Ontario</div>
        <div>Canada</div>
      </div>
    </div>
  </div>
  <div class="contactus">
    <div class="info row">
      <div class="timings col-4">
        <span
          ><h2><font-awesome-icon icon="fa-regular fa-clock" /></h2
        ></span>
        <div>We are open</div>
        <div>
          <span>Monday</span> to <span>Friday </span> 10:00 am to 12:00 PM
          <br />&amp;<br />
          Noon to 10:00 PM on <span>Weekends</span>
        </div>
      </div>
      <div class="center col-4">Pazim Goyal</div>
      <div class="address col-4">
        <span
          ><h2><font-awesome-icon icon="fa-solid fa-map-location" /></h2
        ></span>
        <div>#716, 2871 Richmond Road</div>
        <div>Ottawa, Ontario</div>
        <div>Canada</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ContactUs",
};
</script>
<style>
.contactus {
  background-color: rgb(0, 0, 0);
  background-size: cover;
  color: #756300;
  height: 50vh;
}
.contactus .info {
  font-size: 20px;
  height: fill;
  text-align: center;
  align-items: center;
  font-family: cursive;
}
.timings {
  color: white;
  font-weight: bold;
  font-size: 20px;
  text-shadow: 1px 1px 1px black;
}
.timings span {
  color: #756300;
}
.info .center {
  background: url("~@/assets/design.jpeg") center no-repeat;
  background-size: contain;
}
.address {
  color: white;
}
.address span {
  color: #756300;
}
</style>
