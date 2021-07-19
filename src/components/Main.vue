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

        <!-- inizio sezione sconti -->
        <PriceOff/>
        <!-- fine sezione sconti -->

        <!-- inizio sezione new arrivals -->
        <NewArrivals/>
        <!-- fine sezione new arrivals -->

        <!-- Inizio testimonianze -->
        <Testimonial/>
        <!-- fine testimonianze -->

  </main>
</template>

<script>
import FeaturedProducts from '@/components/FeaturedProducts.vue'
import SeasonCollection from '@/components/SeasonCollection.vue'
import BestSeller from '@/components/BestSeller.vue'
import PriceOff from '@/components/PriceOff.vue'
import NewArrivals from '@/components/NewArrivals.vue'
import Testimonial from '@/components/Testimonial.vue'








export default {
    name: 'Main',

    components:{
        FeaturedProducts,
        SeasonCollection,
        BestSeller,
        PriceOff,
        NewArrivals,
        Testimonial
    },

}
</script>

<style>

</style>