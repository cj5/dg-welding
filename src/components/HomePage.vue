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

    <div class="border-top"></div>

    <section class="py-8">
      <div class="container text-center">
        <h2 class="mb-5 pseudo-underline">Core Values</h2>
        <ul class="fz-lg d-inline-block mb-2">
          <li>Exceed expectations</li>
          <li>Go the extra mile</li>
          <li>Exemplify integrity</li>
          <li>Build a lasting legacy one beam at a time</li>
        </ul>
      </div>
    </section>

    <div class="border-top"></div>

    <section class="py-8 bg-pattern">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="bg-white p-4 border">
              <h2 class="mb-5">Contact</h2>
              <h4 class="mb-4">Located right off of 13 and Yankee Doodle in Eagan, MN</h4>
              <div class="d-flex flex-column">
                <a href="#" class="mb-2">
                  <LocationIcon />
                  <span class="icon-wrapper">
                    <svg class="icon icon-location"><use xlink:href="#icon-location"></use></svg>
                  </span>
                  3265 Sun Drive, Eagan MN 55121
                </a>
                <a href="#" class="mb-2">
                  <PhoneIcon />
                  <span class="icon-wrapper">
                    <svg class="icon icon-phone"><use xlink:href="#icon-phone"></use></svg>
                  </span>
                  651-688-2358
                </a>
                <a href="mailto:info@dg-welding.com">
                  <EmailIcon />
                  <span class="icon-wrapper">
                    <svg class="icon icon-mail"><use xlink:href="#icon-mail"></use></svg>
                  </span>
                  info@dg-welding
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2829.1007871711613!2d-93.19545428446335!3d44.83988077909854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f62e615e1139cf%3A0x420018bf24b6be85!2s3265+Sun+Dr%2C+Eagan%2C+MN+55121!5e0!3m2!1sen!2sus!4v1546926209770" width="100%" height="100%" frameborder="0" style="border:0" allowfullscreen></iframe>
          </div>
        </div>        
      </div>
    </section>

  </div>
</template>

<script>
import CarouselOurServices from './CarouselOurServices';
import LocationIcon from './svg/LocationIcon';
import PhoneIcon from './svg/PhoneIcon';
import EmailIcon from './svg/EmailIcon';

export default {
  name: "HomePage",
  components: {
    CarouselOurServices,
    LocationIcon,
    PhoneIcon,
    EmailIcon
  },
  methods: {
    shiftHeading() {
      const heroHeading = document.querySelector('.hero-heading');
      heroHeading.style.left = '0px';
    }
  },
  mounted() {
    window.addEventListener('load', () => {
      this.shiftHeading();
    });
  }
}
</script>
