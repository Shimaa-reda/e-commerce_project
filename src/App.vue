<template>
 
  <AppHeader />
  <JewelryType />
  <HandCrafted />
  <gallary />
  <reviews />
  <Services />
  <app-footer />
  <router-view/>
</template>
<script>
// main.js or App.vue
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

import AppHeader from '@/components/AppHeader.vue'
import JewelryType from '@/components/JewelryType.vue'
import HandCrafted from '@/components/HandCrafted.vue'
import Gallary from './components/Gallary.vue'
import Reviews from './components/Reviews.vue'
import Services from './components/Services.vue'
import AppFooter from './components/AppFooter.vue'


export default {
  name: 'HomeView',
  components: {
    AppHeader,
    JewelryType,
    HandCrafted,
    Gallary,
    Reviews,
    Services,
    AppFooter,
    
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
*{
  overflow-x: hidden;
}
</style>
