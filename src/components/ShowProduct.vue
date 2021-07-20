<template>
  <section id="vetrina-prodotti" class="pt-4">
      <div class="my_container">
          <div class="row">

              <!-- featured -->
              <div class="col me-4">
                  <h6 class="pb-3 my_letter_spacing_5 text-uppercase">featured</h6>
                  <CardProductList :product="featured"/>
              </div>

              <!-- on sale -->
              <div class="col me-4">
                  <h6 class="pb-3 my_letter_spacing_5 text-uppercase">on sale</h6>
                  <CardProductList :product="onSale"/>
              </div>
            
              <!-- top rated -->
              <div class="col me-4">
                  <h6 class="pb-3 my_letter_spacing_5 text-uppercase">top rated</h6>
                  <CardProductList :product="topRated"/>
              </div>

              <!-- latest review -->
              <div class="col me-4">
                  <h6 class="pb-3 my_letter_spacing_5 text-uppercase">latest reviews</h6>
                  <CardProductList :product="latestReviews"/>
              </div>
          </div>
      </div>
  </section>
</template>

<script>
import Featured from '@/data/Featured.js'
import OnSale from '@/data/OnSale.js'
import TopRated from '@/data/TopRated.js'
import LatestReviews from '@/data/LatestReviews.js'
import CardProductList from '@/components/CardProductList.vue'


export default {
    name: 'ShowProduct',

    data(){
        return{
            featured: Featured,
            onSale: OnSale,
            topRated: TopRated,
            latestReviews: LatestReviews
        }
    },

    components:{
        CardProductList
    }

}
</script>

<style lang="scss">
    #vetrina-prodotti{
        
        ul{
            padding-left: 0;

            img{
                width: 100%;
            }
        }
    }

</style>