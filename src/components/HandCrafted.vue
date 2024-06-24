<template>
  <div class="row mt-5">
    <div class="col-lg-6 col-sm-12 col-md-12 d-flex flex-column align-items-center justify-content-center text-center text">
      <div>
        <h1 class="text-uppercase">Hand Crafted fine pieces.</h1>
        <p>
          We also firmly believe that our customers deserve more choices,
          straightforward information, and legendary service.
        </p>
        <button
          class="btn btn-primary text-uppercase"
          style="
            background-color: white;
            color: #002d69;
            border: none;
            padding: 10px;
          "
        >
          Learn more
        </button>
      </div>
    </div>
    <div class="col d-flex align-items-center justify-content-center ps-0">
      <img src="../assets/Image.png" alt="" class="w-100 img-fluid" />
    </div>
    
  </div>
</template>

<script>
export default {
  name: "HandCrafted",
};
</script>

<style scoped>
.text {
  background-color: #002d69;
  color: aliceblue;
  font-weight: bold;
  padding: 20px; /* Add padding for better readability */
}

.text h1 {
  margin-bottom: 20px; /* Adjust spacing between elements */
}

.text p {
  margin-bottom: 20px; /* Adjust spacing between elements */
}
</style>