<template>
  <section class="py-6 bg-pattern">
    <div class="container">
      <h2 class="mb-5">Our Services</h2>
      <div class="carousel-wrapper mb-4">
        <swiper :options="carouselOptions" ref="carousel">
          <!-- SLIDE 1 -->
          <swiper-slide>
            <a href="#" class="module module-1">
              <div class="img-wrapper">
                <img src="../assets/images/fence-2.jpg" alt="">
              </div>  
              <h3>Steel fabrications</h3>
              <a href="#">Click to view project gallery</a>
            </a>
          </swiper-slide>
          <!-- SLIDE 2 -->
          <swiper-slide>
            <a href="#" class="module module-2">
              <div class="img-wrapper">
                <img src="../assets/images/custom-corkscrew-2.jpg" alt="">
              </div>  
              <h3>Miscellaneous steels</h3>
              <a href="#">Click to view project gallery</a>
            </a>
          </swiper-slide>
          <!-- SLIDE 3 -->
          <swiper-slide>
            <a href="#" class="module module-3">
              <div class="img-wrapper">
                <img src="../assets/images/fence-2.jpg" alt="">
              </div>  
              <h3>Structural steel</h3>
              <a href="#">Click to view project gallery</a>
            </a>
          </swiper-slide>

          <!-- SLIDE 4 -->
          <swiper-slide>
            <a href="#" class="module module-1">
              <div class="img-wrapper">
                <img src="../assets/images/fence-2.jpg" alt="">
              </div>  
              <h3>Installation</h3>
              <a href="#">Click to view project gallery</a>
            </a>
          </swiper-slide>
          <!-- SLIDE 5 -->
          <swiper-slide>
            <a href="#" class="module module-2">
              <div class="img-wrapper">
                <img src="../assets/images/custom-corkscrew-2.jpg" alt="">
              </div>  
              <h3>Ornamental development</h3>
              <a href="#">Click to view project gallery</a>
            </a>
          </swiper-slide>
          <!-- SLIDE 6 -->
          <swiper-slide>
            <a href="#" class="module module-3">
              <div class="img-wrapper">
                <img src="../assets/images/fence-2.jpg" alt="">
              </div>  
              <h3>Repairs</h3>
              <a href="#">Click to view project gallery</a>
            </a>
          </swiper-slide>

          <!-- SLIDE 7 -->
          <swiper-slide>
            <a href="#" class="module module-1">
              <div class="img-wrapper">
                <img src="../assets/images/fence-2.jpg" alt="">
              </div>  
              <h3>Blackened steel</h3>
              <a href="#">Click to view project gallery</a>
            </a>
          </swiper-slide>
          <!-- SLIDE 8 -->
          <swiper-slide>
            <a href="#" class="module module-2">
              <div class="img-wrapper">
                <img src="../assets/images/custom-corkscrew-2.jpg" alt="">
              </div>  
              <h3>UltraLox</h3>
              <a href="#">Click to view project gallery</a>
            </a>
          </swiper-slide>
          <!-- SLIDE 9 -->
          <swiper-slide>
            <a href="#" class="module module-3">
              <div class="img-wrapper">
                <img src="../assets/images/fence-2.jpg" alt="">
              </div>  
              <h3>Custom design &amp; fab</h3>
              <a href="#">Click to view project gallery</a>
            </a>
          </swiper-slide>

        </swiper>
        <div class="swiper-pagination"  slot="pagination"></div>
        <div class="swiper-arrow swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-arrow swiper-button-next" slot="button-next"></div>
      </div>
    </div>
  </section>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: "CarouselOurServices",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      carouselOptions: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.carousel.swiper
    }
  },
  mounted() {
    console.log('this is current swiper instance object', this.swiper)
    this.swiper.slideTo(3, 1000, false)
  }
}
</script>
