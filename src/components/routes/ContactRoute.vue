<template>
  <div id="contact-page">
    <div class="container content pb-8">
      <h2 class="py-6">Contact</h2>
      <form :action="`https://formsubmit.co/${$link_email}`" method="POST">

        <input type="hidden" name="_cc" value="stac1221@gmail.com">
        <input type="hidden" name="_subject" value="Comment from dg-welding.com">
        <input type="hidden" name="_template" value="box">
        <input type="text" name="_honey" style="display: none;">

        <div class="input-wrap">
          <label for="name">Name <span class="required">(Required)</span></label>
          <input type="text" id="name" name="Name" required>
        </div>
        <div class="input-wrap">
          <label for="email">Email <span class="required">(Required)</span></label>
          <input type="text" id="email" name="Email" required>
        </div>
        <div class="input-wrap">
          <label for="message">Message <span class="required">(Required)</span></label>
          <textarea id="message" name="Message" rows="6" required></textarea>
        </div>
        <button type="submit" class="btn mt-5">Submit</button>
      </form>
    </div>
    <Contact />
  </div>
</template>

<script>
import Contact from '../Contact.vue';

export default {
  name: 'ContactRoute',
  components: {
    Contact,
  },
}
</script>
