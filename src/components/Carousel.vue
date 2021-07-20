<template>
    <!-- <VueSlickCarousel @init="onInitCarousel">
        <div><h3>1</h3></div>
        /*...*/
        <template #prevArrow="arrowOption">
            <div class="custom-arrow">
             {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}
            </div>
        </template>
            /*...*/
        <template #customPaging="page">
            <div class="custom-dot">
                {{ page }}
            </div>
        </template>
    </VueSlickCarousel> -->


    <div>
        <VueSlickCarousel v-bind="settings">
            <div><h3>1</h3></div>
            <div><h3>2</h3></div>
            <div><h3>3</h3></div>
            <div><h3>4</h3></div>
            <div><h3>5</h3></div>
            <div><h3>6</h3></div>
            <div><h3>7</h3></div>
            <div><h3>8</h3></div>
            <div><h3>9</h3></div>
            <div><h3>10</h3></div>
        </VueSlickCarousel>
    </div>



    
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

export default {
    name: 'Carousel',
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
    },

}
</script>

<style lang="scss">

button{
    display: none !important;
}

</style>