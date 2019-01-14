<template>
  <div class="header">    
    <div class="top-bar">
      <div class="container">
        <div class="top-bar-height d-flex justify-content-end align-items-center">
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
    <div class="container">
      <nav class="d-flex align-items-center justify-content-between">
        <div class="nav-links">
          <ul class="d-flex">
            <li>
              <router-link to="/" active-class="active" exact>Home</router-link>
            </li>
            <li>
              <router-link to="/about" active-class="active">About</router-link>
            </li>
            <li>
              <router-link to="/history" active-class="active">History</router-link>
            </li>
            <li>
              <router-link to="/gallery" active-class="active">Gallery</router-link>
            </li>
            <li>
              <router-link to="/contact" active-class="active">Contact</router-link>
            </li>
          </ul>
        </div>
        <div class="logo">
          <a href="#" class="d-flex align-items-center">
            <img src="../assets/images/logo.png" alt="company logo">
          </a>
        </div>
      </nav>
    </div>
    <div class="header-border"></div>
  </div>
</template>

<script>
import EmailIcon from './svg/EmailIcon'
import FacebookIcon from './svg/FacebookIcon'

export default {
  name: "Header",
  components: {
    EmailIcon,
    FacebookIcon
  }
}
</script>
