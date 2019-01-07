<template>
  <div id="app">
    <Header />
    <HomePage />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import HomePage from './components/HomePage.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Header,
    HomePage,
    Footer
  }
}
</script>

<style lang="scss">
  @import "/assets/scss/main.scss";
</style>
