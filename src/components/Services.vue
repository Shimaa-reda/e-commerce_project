<template>
  <div class="container mt-5">
    <h1 class="mb-4 text-start mb-5">Our Services</h1>
    <div class="row">

      <div class="col-lg-4 col-md-12 col-sm-12 mb-5">
       
         <div class="row">
             <img src="../assets/service 1.png" alt="" />

        </div>
        <div class="row">
          <p class="text-uppercase mt-3">Jewelry Repair</p>
        </div>
      </div>

      <div class="col-lg-4 col-md-12 col-sm-12 mb-5">
        
         <div class="row">
           <img src="../assets/service 2.png" alt="" />

        </div>
        <div class="row">
          <p class="text-uppercase mt-3">Ring Sizing</p>
        </div>
      </div>

      <div class="col-lg-4 col-md-12 col-sm-12 mb-5">
       
         <div class="row">
            <img src="../assets/service 3.png" alt="" />

        </div>
        <div class="row">
          <p class="text-uppercase mt-3">Jewelry Polishing</p>
        </div>
      </div>
    </div>
    <button class="text-uppercase services-btn mt-5 mb-5">learn more</button>
  </div>
</template>

<script>
export default {
  name: "Services",
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
.services-btn
{
    background-color: #002D69;
    border: none;
    color: white;
    border-radius: 5px;
    padding: 5px;
}

</style>
