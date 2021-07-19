<template>
  <main>
      <!-- iniizo sezione featured product -->
      <FeaturedProducts/>
      <!-- fine sezione featured products -->

      <!-- inizio sezione con collezione stagioni -->
      <SeasonCollection/>
      <!-- fine sezione con collezioni stagioni -->

      <!-- inizio sezione best seller -->
      <BestSeller/>
      <!-- fine sezione best seller -->

  </main>
</template>

<script>
import FeaturedProducts from '@/components/FeaturedProducts.vue'
import SeasonCollection from '@/components/SeasonCollection.vue'
import BestSeller from '@/components/BestSeller.vue'



export default {
    name: 'Main',

    components:{
        FeaturedProducts,
        SeasonCollection,
        BestSeller
    }

}
</script>

<style>

</style>