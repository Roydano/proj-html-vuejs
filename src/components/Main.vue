<template>
  <main>
      <!-- iniizo sezione featured product -->
      <FeaturedProducts/>
      <!-- fine sezione featured products -->

      <!-- inizio sezione con collezione stagioni -->
      <SeasonCollection/>
      <!-- fine sezione con collezioni stagioni -->

  </main>
</template>

<script>
import FeaturedProducts from '@/components/FeaturedProducts.vue'
import SeasonCollection from '@/components/SeasonCollection.vue'


export default {
    name: 'Main',

    components:{
        FeaturedProducts,
        SeasonCollection
    }

}
</script>

<style>

</style>