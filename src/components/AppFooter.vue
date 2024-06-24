<template>
  <div class="footer">
    <div class="container footer-content">
      <div class="content d-flex flex-column justify-content-center align-items-center">
        <div class="row bg-white">
          <div class="col-lg-6 col-md-6 col-sm-12 p-0">
            <img src="../assets/footer.png" alt="" class="w-100 img-fluid">
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12 p-5">
            <div class="content d-flex flex-column align-items-center justify-content-center text-center w-100 h-100">
              <h3 class="text-uppercase">Stay in touch?</h3>
              <p>Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
              <button class="footer-btn text-uppercase px-4 py-2">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row mt-5">
        <div class="col-lg-2 col-md-4 col-sm-12">
          <div class="links">
            <h5>Products</h5>
            <ul class="list-unstyled lh-lg">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>
        <div class="col-lg-2 col-md-4 col-sm-12">
          <div class="links">
            <h5>Resources</h5>
            <ul class="list-unstyled lh-lg">
              <li>Documentation</li>
              <li>Case Studies</li>
            </ul>
          </div>
        </div>
        <div class="col-lg-2 col-md-4 col-sm-12">
          <div class="links">
            <h5>Company</h5>
            <ul class="list-unstyled lh-lg">
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <hr>

    <div class="container">
      <section class="p-3 pt-0">
        <div class="row d-flex align-items-center">
          <div class="col-md-7 col-lg-8 text-center text-md-start">
            <div class="p-3">
              <div>&copy; <span>Blue Diamond Jewelry™ 2021</span></div>
            </div>
          </div>
          <div class="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
            <a class="btn btn-link btn-floating btn-lg text-body m-1" href="#!" role="button"><i class="fab fa-facebook"></i></a>
            <a class="btn btn-link btn-floating btn-lg text-body m-1" href="#!" role="button"><i class="fab fa-pinterest"></i></a>
            <a class="btn btn-link btn-floating btn-lg text-body m-1" href="#!" role="button"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style scoped>
.footer {
  background-color: #B8E0EF;
  padding-top: 70px;
}

.footer-content {
  max-width: 900px;
}

.footer-btn {
  background-color: #002D69;
  border: none;
  color: white;
  border-radius: 5px;
  padding: 5px;
}
</style>
