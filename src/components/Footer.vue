<template>
  <div class="footer-wrapper">
    <div class="border-top"></div>
    <div class="container">
      <div class="footer d-flex justify-content-between align-items-center">
        <div class="d-flex justify-content-end">
          <a :href="`mailto:${$link_email}`" class="mr-4">
            <EmailIcon />
            <svg class="icon icon-mail"><use xlink:href="#icon-mail"></use></svg>
          </a>
          <a :href="$link_facebook" class="mr-4">
            <FacebookIcon />
            <svg class="icon icon-facebook"><use xlink:href="#icon-facebook"></use></svg>
          </a>
          <a :href="`tel:${$link_phone}`">(651) 688-2358</a>
        </div>
        <div class="logo">
          <router-link to="/" exact class="d-flex align-items-center">
            <img src="../assets/images/logo.png" alt="company logo">
          </router-link>
        </div>
        <p>&copy;{{ year }} DG Welding & Mfg.</p>
      </div>
    </div>
  </div>
</template>

<script>
import EmailIcon from './svg/EmailIcon'
import FacebookIcon from './svg/FacebookIcon'

export default {
  name: 'Footer',
  components: {
    EmailIcon,
    FacebookIcon
  },
  computed: {
    year() {
      return new Date().getFullYear();
    },
  },
}
</script>
