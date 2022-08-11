<template>
  <div class="about">
    <img src="../../assets/images/ribbon-1.jpg" alt="" class="pb-6">
    <div class="container">
      <div class="content pb-8">
        <h2 class="mb-4">About</h2>
        <p>DG Welding &amp; Mfg. is a private, family owned welding and steel fabrication shop based in Eagan, Minnesota.</p>
        <p>With over 40 years of service to the Twin Cities and surrounding areas, we
        provide structural steel, miscellaneous and ornamental welding and manufacturing on site and in house.</p>
        <p>Our range of skills and experience in the construction industry has provided us with the knowledge to aid in any project steel related.</p>
        <p>With no job too big or too small, DG offers a variety of services to fit most diverse contracting, residential or custom needs.</p>
      </div>
    </div>

    <div class="border-top"></div>

    <section class="py-6 bg-gray-10">
      <div class="container">
        <div class="container text-center">
          <h2 class="mb-5 pseudo-underline">Core Values</h2>
          <ul class="fz-lg d-inline-block mb-2">
            <li>Exceed expectations</li>
            <li>Go the extra mile</li>
            <li>Exemplify integrity</li>
            <li>Build a lasting legacy one beam at a time</li>
          </ul>
        </div>
      </div>
    </section>

  <Contact />

  </div>

</template>

<script>
import Contact from '../Contact'

export default {
  name: 'AboutRoute',
  components: {
    Contact
  }
}
</script>
