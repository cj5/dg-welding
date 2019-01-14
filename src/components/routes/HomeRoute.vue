<template>
  <div>
    <div class="hero d-flex align-items-center">
      <div class="filter"></div>
      <div class="container">
          <h1 class="hero-heading d-flex flex-column">
            <span class="heading-a mb-2">DG Welding</span>
            <span class="heading-b fz-xl italic gray-20">&amp; Mfg.</span>
          </h1>
      </div>
    </div>

    <CarouselOurServices />    

    <Contact />

  </div>
</template>

<script>
import CarouselOurServices from '../CarouselOurServices';
import Contact from '../Contact';

export default {
  name: "HomePage",
  components: {
    CarouselOurServices,
    Contact
  },
  data() {
    return {
      // headingPosition: '-100%'
    }
  },
  // methods: {
  //   shiftHeading(lifeCycle) {
  //     // eslint-disable-next-line
  //     console.log('shiftHeading() from ' + lifeCycle);
  //     const heroHeading = document.querySelector('.hero-heading');
  //     this.$nextTick(function () {
  //       this.headingPosition = 0;
  //     });
  //     // heroHeading.style.left = '0px';
  //   }
  // },
  // watch: {
  //   $route() {
  //     // eslint-disable-next-line
  //     console.log('route changed to home');
  //     this.shiftHeading();
  //   }
  // },  
  // mounted() {
  //   window.addEventListener('load', () => {
  //     this.shiftHeading('mounted()');
  //   });
  // },
  // updated() {
  //   console.log('updated()');
  //   this.shiftHeading('updated()');
  // }
}
</script>
