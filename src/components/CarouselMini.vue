<template>
    <div id="mini-carousel" class="carousel">

        
        <div class="row align-items-center justify-content-around my_mx">

            <!-- inizio bottone di sinistra -->
            <div class="col-1">
                <div class="btn_left">
                    <i @click="backPhoto" class="fas fa-chevron-left"></i>
                </div>
            </div>
            <!-- fine bottone di sinistra -->

            <!-- inizio carosello -->
            <div class="col-10">
                <VueSlickCarousel v-bind="settings" ref="carousel">

                    <div v-for="obj in item" :key="obj" class="img_box_carousel">
                        <div><img :src="getImg(obj.img)" :alt="obj.title"></div>

                        <div class="action">
                            <div class="d-flex flex-column justify-content-between">
                                <div class="info_action text-center">
                                    <h5>{{obj.title}}</h5>
                                    <h6 class="my_fs_13">{{obj.subtitle}}</h6>
                                    <h6>{{obj.priceFull}}</h6>
                                </div>
                                <div class="buy row my_w200">
                                    <div class="col-6 text-center">
                                        <p><i class="fas fa-shopping-cart me-1"></i></p>
                                    </div>
                                    <div class="col-6 text-center">
                                        <p><i class="fas fa-list me-1"></i></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    
            
                </VueSlickCarousel>
            </div>
            <!-- fine carosello -->

            <!-- inizio bottone di destra -->
            <div class="col-1">
                <div class="btn_right">
                    <i  @click="nextPhoto"  class="fas fa-chevron-right"></i>
                </div>
            </div>
            <!-- fine bottone di destra -->

        </div>
        

       
    </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import Carousel from '@/data/Carousel.js'

export default {
    name: 'CarouselMini',

    components:{
       VueSlickCarousel, 
       
    },


    data(){
        return{
            settings:{
                "focusOnSelect": true,
                "infinite": true,
                "slidesToShow": 5,
                "slidesToScroll": 1,
                "speed": 500,
                "arrows": true,
            },

            item: Carousel
        }
    },

    methods:{

        nextPhoto(){
            this.$refs.carousel.next()
        },

        backPhoto(){
            this.$refs.carousel.prev()
        },

        //?funzione per fare leggere il percorso delle immagini dal webpack
        getImg(img) {
        return require('../assets/'+ img);
        },
    }

}
</script>

<style lang="scss">

    #mini-carousel{
        button{
            display: none !important;
        }

        // formattazione bottoni
        .btn_right{
            float: right;
            clear: both;
            content: "";
            display: table;
        }

        .btn_left,
        .btn_right{
            color: white;
            background-color: #c2c2c2;
            text-align: center;
            font-size: 12px;
            width: 30px;
            height: 50px;
            line-height: 50px;
            cursor: pointer;

            &:hover{
                background-color: #999999;
            }
        }

        // formattazione carosello
        .img_box_carousel{
            position: relative;
            height: 260px;
            width: 200px !important;
            background:linear-gradient(180deg, rgba(255, 255, 0, 1) 0%, rgba(80, 136, 212, 1) 0%, rgba(116, 142, 211, 1) 33%, rgba(239, 166, 210, 1) 100%);
            cursor: pointer;
            &:hover img{
                opacity: 0.2;
            }

            &:hover .action{
                display: block;
            }

            img{
                transition: opacity 1s;
                width: 100%;
                position: absolute;
                left: -20px;

            }

            // formattazione dettagli che compaiono quando passo sopra la foto
            .action{
                max-width: 200px;
                display: none;
                position: absolute;
                left: 40%;
                color: white;
                line-height: 0.5;
                font-size: 11px;
            }

            // formattazione icone carrello e dettagli
            .buy{
                position: absolute;
                top: 140px;
                left: -21px;
            }
        }
    }

</style>