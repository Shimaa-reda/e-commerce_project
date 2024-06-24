<template>
  <div class="container mt-5">
    <h1 class="mb-4 text-start">Shop by Jewelry Type</h1>
    <div class="row justify-content-center">
      <div class="col-lg-2 col-md-4 col-sm-12 col-12 mb-4" v-for="item in items" :key="item.id">
        <div class="card h-100 text-center">
          <img :src="item.image" :alt="item.type" class="card-img-top">
          <div class="card-body">
            <p class="card-text text-uppercase mt-3">{{ item.type }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JewelryType",
  data() {
    return {
      items: [
        { id: 1, type: 'Earrings', image: require('../assets/Item 1.png') },
        { id: 2, type: 'Necklaces', image: require('../assets/Item 2.png') },
        { id: 3, type: 'Bracelets', image: require('../assets/Item 3.png') },
        { id: 4, type: 'All Rings', image: require('../assets/Item 4.png') },
        { id: 5, type: 'Engagement Rings', image: require('../assets/Item 5.png') },
      ]
    };
  }
};
</script>

<style scoped>
h1 {
  color: #002D69;
}

p {
  color: #0d5eba;
}
</style>
