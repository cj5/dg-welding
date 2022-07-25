<template>
  <section class="py-6">
    <div class="container pb-4 pb-md-6">
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
                <button class="btn btn-sm">Go to project gallery</button>
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
  name: 'CarouselOurServices',
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      slides: [
        { imgSrc: 'fence.jpg', imgAlt: 'fence', title: 'Steel Fabrications' },
        { imgSrc: 'corkscrew.jpg', imgAlt: 'corkscrew', title: 'Miscellaneous Steels' },
        { imgSrc: 'base.jpg', imgAlt: 'base', title: 'Structural Steel' },
        { imgSrc: 'fence-4.jpg', imgAlt: 'fence', title: 'Installation' },
        { imgSrc: 'fence-3-doors.jpg', imgAlt: 'fence', title: 'Ornamental Development' },
        { imgSrc: 'employee-2.jpg', imgAlt: 'employee', title: 'Repairs' },
        { imgSrc: 'fence-2.jpg', imgAlt: 'fence', title: 'Blackened Steel' },
        { imgSrc: 'stairs-2.jpg', imgAlt: 'stairs', title: 'Ultralox' },
        { imgSrc: 'stairs-custom.jpg', imgAlt: 'stairs', title: 'Custom Design & Fab' },
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
        },
        breakpoints: {
          900: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 0,
          },
        },
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
      return this.$refs.carousel.swiper;
    }
  },
  mounted() {
    this.swiper.slideTo(3, 1000, false);
  }
}
</script>
