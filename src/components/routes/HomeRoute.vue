<template>
  <div>
    <div class="hero d-flex align-items-center">
      <div class="filter"></div>
      <div class="container">
          <h1 class="hero-heading d-flex flex-column">
            <span class="heading-a mb-2">D G Welding</span>
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
  name: 'HomeRoute',
  components: {
    CarouselOurServices,
    Contact,
  },
}
</script>
