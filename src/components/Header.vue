<template>
  <header class="header">
    <div class="top-bar">
      <div class="container">
        <div class="top-bar-height d-flex justify-content-end align-items-center">
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
      </div>
    </div>
    <div class="container">
      <nav class="d-flex align-items-center justify-content-between">
        <a
          role="button"
          @click="toggleMobileNav"
          @keydown="toggleMobileNav"
          id="navicon"
          tabindex="0"
          v-html="naviconText"
        ></a>
        <div class="nav-links" ref="navLinks">
          <div class="h-100">
            <ul class="d-flex">
              <li>
                <router-link to="/" active-class="active" exact @click.native="toggleMobileNav" @keydown.enter="toggleMobileNav">Home</router-link>
              </li>
              <li>
                <router-link to="/about" active-class="active" @click.native="toggleMobileNav" @keydown.enter="toggleMobileNav">About</router-link>
              </li>
              <li>
                <router-link to="/history" active-class="active" @click.native="toggleMobileNav" @keydown.enter="toggleMobileNav">History</router-link>
              </li>
              <li>
                <router-link to="/gallery" active-class="active" @click.native="toggleMobileNav" @keydown.enter="toggleMobileNav">Gallery</router-link>
              </li>
              <li>
                <router-link to="/contact" active-class="active" @click.native="toggleMobileNav" @keydown.enter="toggleMobileNav">Contact</router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="logo">
          <router-link to="/" exact>
            <img src="../assets/images/logo.png" alt="DG Welding">
          </router-link>
        </div>
      </nav>
    </div>
    <div class="header-border"></div>
  </header>
</template>

<script>
import EmailIcon from './svg/EmailIcon'
import FacebookIcon from './svg/FacebookIcon'

export default {
  name: 'Header',
  components: {
    EmailIcon,
    FacebookIcon
  },
  data() {
    return {
      isMobileNavOpen: false,
      naviconClosed: '☰',
      naviconOpen: '&times;',
    }
  },
  methods: {
    toggleMobileNav() {
      if (this.isMobileNavOpen) {
        this.closeMobileNav();
      } else {
        this.$refs.navLinks.classList.add('open');
        this.isMobileNavOpen = true;
      }
    },
    closeMobileNav() {
      console.log('hello?')
      this.$refs.navLinks.classList.remove('open');
      this.isMobileNavOpen = false;
    },
  },
  computed: {
    naviconText() {
      if (this.isMobileNavOpen) {
        return this.naviconOpen;
      } else {
        return this.naviconClosed;
      }
    }
  },
}
</script>
