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
        <div class="logo">
          <a href="#" class="d-flex align-items-center">
            <img src="../assets/images/logo.png" alt="company logo">
          </a>
        </div>
        <div class="nav-links">
          <ul class="d-flex">
            <li><a href="#" class="active">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">History</a></li>
          </ul>
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
