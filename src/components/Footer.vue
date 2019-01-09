<template>
  <div class="footer-wrapper">
    <div class="border-top"></div>
    <div class="container">
      <div class="footer d-flex justify-content-between align-items-center">
        <p>&copy;2019 DG Welding & Mfg.</p>
        <div class="logo">
          <a href="#" class="d-flex align-items-center">
            <img src="../assets/images/logo.png" alt="company logo">
          </a>
        </div>
        <div class="d-flex justify-content-end">
          <a href="#" class="mr-4">
            <EmailIcon />
            <svg class="icon icon-mail"><use xlink:href="#icon-mail"></use></svg>
          </a>
          <a href="#" class="mr-4">
            <FacebookIcon />
            <svg class="icon icon-facebook"><use xlink:href="#icon-facebook"></use></svg>
          </a>
          <a href="tel:651-688-2358">651-688-2358</a>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
import EmailIcon from './svg/EmailIcon'
import FacebookIcon from './svg/FacebookIcon'

export default {
  name: "Footer",
  components: {
    EmailIcon,
    FacebookIcon
  }
}
</script>
