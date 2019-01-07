<template>
  <div>
    <div class="hero d-flex align-items-center">
      <div class="filter"></div>
      <div class="container">
        <h1 class="hero-heading">DG Welding<br><span class="fz-xl italic gray-30">and Mfg.</span></h1>
      </div>
    </div>
    <section class="py-8 bg-pattern">
      <div class="container text-center">
        <h2 class="mb-4">Core Values</h2>
        <ul class="fz-lg bg-white d-inline-block border p-5">
          <li>Exceed expectations</li>
          <li>Go the extra mile</li>
          <li>Exemplify integrity</li>
          <li>Build a lasting legacy one beam at a time</li>
        </ul>
      </div>
    </section>
    <div class="border-top"></div>
    <section class="position-relative offset-images py-6">
      <!-- <img src="../assets/images/fence.jpg" alt="fence" class="img-left"> -->
      <div class="container">
        <div class="row mb-8">
          <div class="col-6">
            <img src="../assets/images/fence.jpg" alt="fence" class="">
          </div>
          <div class="col-6 d-flex align-items-center">
            <div class="content ml-5 fz-lg">
              <p>DG Welding &amp; Mfg. is a private, family owned welding and steel fabrication shop based in Eagan, Minnesota.</p>
              <p>With over 40 years of service to the Twin Cities and surrounding areas, we provide structural steel, miscellaneous and ornamental welding and manufacturing on site and in house.</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-6 d-flex align-items-center">
            <div class="content mr-5 fz-lg">
              <p>Our range of skills and experience in the construction industry has provided us with the knowledge to aid in any project steel related.</p>
              <p>With no job too big or too small, DG offers a variety of services to fit most diverse contracting, residential or custom needs.</p>
            </div>
          </div>
          <div class="col-6">
            <img src="../assets/images/custom-corkscrew.jpg" alt="custom corkscrew" class="">
          </div>
        </div>
      </div>
      <!-- <img src="../assets/images/custom-corkscrew.jpg" alt="custom corkscrew" class="img-right"> -->
    </section>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  methods: {
    offsetImageSizing() {
      const offsetImagesEl = document.querySelector('.offset-images');
      const row1El = document.querySelector('.row-1');
      const row2El = document.querySelector('.row-2');

      let row1ImgHt = document.querySelector('.img-left').clientHeight;
      let row1ImgHtString = row1ImgHt + 'px';
      row1El.style.height = row1ImgHt + 'px';

      let row2ImgHt = document.querySelector('.img-right').clientHeight;
      let row2ImgHtString = row2ImgHt + 'px';
      row2El.style.height = row2ImgHt + 'px';

      let offsetImagesHt = row1ImgHt + row2ImgHt;
      let offsetImagesHtString = offsetImagesHt + 'px';
      offsetImagesEl.style.height = offsetImagesHtString;
    }
  },
  mounted() {
    window.addEventListener('load', () => {
      this.offsetImageSizing();
    });
    window.addEventListener('resize', () => {
      this.offsetImageSizing();
    });
  }
}
</script>
