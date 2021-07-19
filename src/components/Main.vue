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

  </main>
</template>

<script>
import FeaturedProducts from '@/components/FeaturedProducts.vue'
import SeasonCollection from '@/components/SeasonCollection.vue'
import BestSeller from '@/components/BestSeller.vue'
import PriceOff from '@/components/PriceOff.vue'






export default {
    name: 'Main',

    components:{
        FeaturedProducts,
        SeasonCollection,
        BestSeller,
        PriceOff
    },

    data(){
        return{
            settings:{
                "focusOnSelect": true,
                "infinite": true,
                "slidesToShow": 5,
                "slidesToScroll": 1,
                "speed": 500
            }
        }
    }

}
</script>

<style>

</style>