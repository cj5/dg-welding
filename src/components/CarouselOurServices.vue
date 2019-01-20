<template>
  <section class="py-6">
    <div class="container">
      <h2 class="mb-5">Our Services</h2>
      <div class="carousel-wrapper mb-4">
        <swiper :options="carouselOptions" ref="carousel">
          
          <swiper-slide v-for="(item, key) in slides" :key="key">
            <div class="module">
              <router-link to="/gallery">
                <div class="img-wrapper">
                  <img :src="imageSrc(key)" :alt="item.imgAlt">
                </div>
                <h3>{{ item.title }}</h3>
                <a>Click to view project gallery</a>
              </router-link>
            </div>
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
      slides: [
        { imgSrc: 'fence.jpg', imgAlt: 'alt', title: 'Steel Fabrications' },
        { imgSrc: 'corkscrew.jpg', imgAlt: 'alt', title: 'Miscellaneous Steels' },
        { imgSrc: 'base.jpg', imgAlt: 'alt', title: 'Structural Steel' },
        { imgSrc: 'fence-4.jpg', imgAlt: 'alt', title: 'Installation' },
        { imgSrc: 'fence-3-doors.jpg', imgAlt: 'alt', title: 'Ornamental Development' },
        { imgSrc: 'employee-2.jpg', imgAlt: 'alt', title: 'Repairs' },
        { imgSrc: 'fence-2.jpg', imgAlt: 'alt', title: 'Blackened Steel' },
        { imgSrc: 'stairs-2.jpg', imgAlt: 'alt', title: 'Ultralox' },
        { imgSrc: 'stairs-custom.jpg', imgAlt: 'alt', title: 'Custom Design & Fab' },
      ],
      carouselOptions: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 6000,
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
  methods: {
    imageSrc(i) {
      return require('../assets/images/gallery/' + this.slides[i].imgSrc); 
    }
  },
  computed: {
    swiper() {
      return this.$refs.carousel.swiper
    }
  },
  mounted() {
    // console.log('this is current swiper instance object', this.swiper)
    this.swiper.slideTo(3, 1000, false)
  }
}
</script>
