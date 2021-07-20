<template>
  <footer>

      <!-- inizio footer top -->
      <FooterTop/>
      <!-- fine footer top -->

      <!-- inizio footer centro -->
      <FooterCenter/>
      <!-- fine footer centro -->

      <!-- inizio footer bottom -->
      <!-- fine footer bottom -->

  </footer>
</template>

<script>
import FooterTop from '@/components/FooterTop.vue'
import FooterCenter from '@/components/FooterCenter.vue'

export default {
    name: 'Footer',

    components:{
        FooterTop,
        FooterCenter

    }

}
</script>

<style lang="scss">

</style>