<template>
  <div class="container mt-5">
    <h1 class="mb-4 text-start mb-5">OUR LATEST JEWELRY</h1>
    <div class="row">
      <div class="col-lg-4 col-md-12 col-sm-12 mb-5">
        <img src="../assets/Gallary 1.png" alt="" class="w-100"/>
      </div>

      <div class="col-lg-4 col-md-12 col-sm-12 mb-5">
        <img src="../assets/Gallary 2.png" alt="" class="w-100"/>
      </div>

      <div class="col-lg-4 col-md-12 col-sm-12 mb-5">
        <img src="../assets/Gallary 3.png" alt="" class="w-100" />
      </div>
    </div>
    <button class="text-uppercase gallary-btn mb-5">view gallery</button>
  </div>
</template>

<script>
export default {
  name: "Gallary",
};
</script>

<style scoped>
h1 {
  color: #002d69;
  /* font-weight: bold; */
  margin: 0;
}
p {
  color: #0d5eba;
}
.gallary-btn
{
    background-color: #002D69;
    border: none;
    color: white;
    border-radius: 5px;
    padding: 5px;
}
</style>
