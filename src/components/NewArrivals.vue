<template>
  <section id="new-arrivals">
        <!-- inizio sezione titolo -->
        <div class="row d-flex text-center my_margin my_container">
            <div class="col-lg-4">
                <div class="line"></div>
            </div>
            <div class="col-lg-4">
                <h2 class="fw-bold h_size_36">New Arrivals</h2>
            </div>
            <div class="col-lg-4">
                <div class="line"></div>
            </div>
        </div>
        <!-- fine sezione titolo -->

        <!-- inizio sezione sottotitolo -->
        <div class="row my_margin-r0">
            <div class="col-12 text-center">
                <p class="p_style">Brand new product from top designers</p>
            </div>
        </div>
        <!-- fine sezione sottotitolo -->

        <!-- inizio del carousel -->
        <Carousel class="my-5"/>
        
  </section>
</template>

<script>
import Carousel from '@/components/Carousel.vue'

export default {
    name: 'NewArrivals',

    components:{
        Carousel

    },

}
</script>

<style lang="scss">
    #new-arrivals{

        .my_margin-r0{
            margin-right: 0 !important;
        }

        // margini per distanziare la sezione
        .my_margin{
            margin-top: 70px;
            height: auto;
            align-items: center;

            // linee orizzontali del titolo
            .line{
            height: 1px;
            background-color: lightgrey;
            } 
            
        }

        .VueCarousel-dot:focus{
            outline: none;
        }
    }

</style>