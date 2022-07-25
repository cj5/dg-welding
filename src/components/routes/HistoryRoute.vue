<template>
  <div class="history">
    <img src="../../assets/images/ribbon-2.jpg" alt="" class="pb-6">
    <div class="content">
      <div class="container pb-8">
        <h2 class="mb-4">History</h2>
        <p>The birth of DG Welding &amp; Mfg. is nothing short of an American Dream. With determination, our founder Ambrose Dolney started his business fixing shopping carts in his garage in 1977. As business started to boom, Ambrose recruited four of his children to help run his growing company. As years went on, the Dolney children continued to grow the DG name, and over the years, numerous grandchildren and relatives have joined the family business. They have created a lasting legacy for multiple generations, and what was once a one man show has developed into a company with more than 30 employees and a state-of-the-art manufacturing shop. For the past {{ year - 1977 }} years, DG Welding has been a leader in the welding and fabrication industry, and continues to support the Twin Cities and growing state of Minnesota.</p>
      </div>
    </div>
    <Contact />
  </div>
</template>

<script>
import Contact from '../Contact'

export default {
  name: 'HistoryRoute',
  components: {
    Contact
  },
  computed: {
    year() {
      return new Date().getFullYear();
    },
  },
}
</script>
