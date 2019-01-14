<template>
  <div>
    <div class="container pb-8">
      <h2 class="pt-6 mb-6">Gallery</h2>
      <div class="carousel-wrapper gallery">
        <swiper :options="carouselOptions" ref="carousel">

          <swiper-slide v-for="(item, key) in images" :key="key">
            <div class="border">
              <img :src="imageSrc(key)" :alt="item.alt">
            </div>
          </swiper-slide>

        </swiper>
        <!-- <div class="swiper-pagination"  slot="pagination"></div> -->
        <div class="swiper-arrow swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-arrow swiper-button-next" slot="button-next"></div>
      </div>
    </div>
    <Contact />
  </div>
</template>

<script>
import Contact from '../Contact'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: "Gallery",
  components: {
    Contact,
    swiper,
    swiperSlide
  },
  data() {
    return {
      carouselOptions: {
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      images: [
        { 
          image: 'fence.jpg',
          alt: 'image' 
        },
        { 
          image: 'fence-doors.jpg', 
          alt: 'image' 
        },
        { 
          image: 'fence-2.jpg', 
          alt: 'image' 
        },
        { 
          image: 'fence-3.jpg', 
          alt: 'image' 
        },
        { 
          image: 'fence-3-doors.jpg', 
          alt: 'image' 
        },
        { 
          image: 'fence-4.jpg', 
          alt: 'image' 
        },
        { 
          image: 'fence-4-door.jpg', 
          alt: 'image' 
        },
      ]
    }
  },
  methods: {
    imageSrc(i) {
      return require('../../assets/images/gallery/' + this.images[i].image); 
    }
  }
}
</script>
