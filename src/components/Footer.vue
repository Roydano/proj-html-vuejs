<template>
  <footer>

      <!-- inizio footer top -->
      <FooterTop/>
      <!-- fine footer top -->

      <!-- inizio footer centro -->
      <FooterCenter/>
      <!-- fine footer centro -->

      <!-- inizio footer bottom -->
      <FooterBottom/>
      <!-- fine footer bottom -->

  </footer>
</template>

<script>
import FooterTop from '@/components/FooterTop.vue'
import FooterCenter from '@/components/FooterCenter.vue'
import FooterBottom from '@/components/FooterBottom.vue'


export default {
    name: 'Footer',

    components:{
        FooterTop,
        FooterCenter,
        FooterBottom

    }

}
</script>

<style lang="scss">

</style>