<template>
  <header>
      <!-- inizio header top -->
      <HeaderTop/>
      <!-- fine header top -->

      <!-- inizio header bottom -->
      <HeaderBottom/>
      <!-- fine header bottom -->

      <!-- inizio jumbotron -->
      <Jumbotron/>
      <!-- fine jumbotron -->

      <!-- <SliderProva/> -->

  </header>
</template>

<script>
import HeaderTop from '@/components/HeaderTop.vue'
import HeaderBottom from '@/components/HeaderBottom.vue'
import Jumbotron from '@/components/Jumbotron.vue'

// import SliderProva from '@/components/SliderProva.vue'



export default {
    name: 'Header',
    components:{
        HeaderTop,
        HeaderBottom,
        Jumbotron,


        // SliderProva
    }

}
</script>

<style lang="scss" scoped>

</style>