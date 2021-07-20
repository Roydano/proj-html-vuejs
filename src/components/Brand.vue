<template>
  <section id="brand" class="mt-5">
      <div class="background_brand py-5">
            <h6 class="text-center text-uppercase my_letter_spacing_5 py-3">brand logos</h6>
            <div class="my_container">
                <VueSlickCarousel v-bind="settings">
                    
                    <div>
                        <img src="@/assets/img/b_logotype_1.png" alt="forest logo">
                    </div>

                    <div>
                        <img src="@/assets/img/b_logotype_2.png" alt="badge logo">
                    </div>

                    <div>
                        <img src="@/assets/img/b_logotype_3.png" alt="beard fashion logo">
                    </div>

                    <div>
                        <img src="@/assets/img/b_logotype_4.png" alt="hype logo">
                    </div>

                    <div>
                        <img src="@/assets/img/b_logotype_5.png" alt="a and q logo">
                    </div>

                    <div>
                        <img src="@/assets/img/b_logotype_6.png" alt="authentic logo">
                    </div>

                    <div>
                        <img src="@/assets/img/b_logotype_7.png" alt="the yard logo">
                    </div>

                    
                </VueSlickCarousel>


            </div>
        </div>
  </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

export default {
    name: 'Brand',
    components:{
        VueSlickCarousel
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

<style lang="scss">

    #brand{
        .background_brand{
            background-color: #f6f6f6;
        }

        button{
            display: none !important;
        }
        
        .VueCarosel-slide{
            flex-shrink: initial;
            padding-left: -20px;
        }
    }

</style>