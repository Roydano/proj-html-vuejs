<template>
  <section id="home_slider">

    <div class="box_img">

        <!-- inizio bottone di sinistra -->
        <div class="btn_left">
            <i @click="backPhoto" class="fas fa-chevron-left"></i>
        </div>
        <!-- fine bottone di sinistra -->

        <!-- inizio immagine home -->
        <div class="img">
            <!--inizio immagine -->
            <img :src="getImg(slide[counter].img)" alt="">
            <!-- fine immagine -->

            <!-- inizio informazione immagine -->
            <div class="info text-center">
                <h2>{{slide[counter].title}}</h2>
                <h4 class="text-uppercase fw-bolder">{{slide[counter].subtitle}}</h4>
                <!-- se lo slider ha due bottoni -->
                <div v-if="slide[counter].button2 != '' " class="btn d-flex justify-content-center mt-3">
                    <div class="btn_choise me-3">{{slide[counter].button1}}</div>
                    <div class="btn_choise">{{slide[counter].button2}}</div>
                </div>
                <!-- se lo slider ha un bottone -->
                <div v-else class="btn d-flex justify-content-center mt-3">
                    <div class="btn_choise me-3">{{slide[counter].button1}}</div>
                </div>
            </div>
            <!-- fine informazioni immagine -->
        </div>
        <!-- fine immagine home -->

        <!-- iniizo bottone di destra -->
        <div class="btn_right">
            <i  @click="nextPhoto"  class="fas fa-chevron-right"></i>
        </div>
        <!-- fine bottone di destra -->

    </div>

  </section>
</template>

<script>
export default {
    name: 'Slider',

    data(){
        return{
            counter: 0,

            slide:[
                {
                    img: 'img/home1_slide_2_bg.jpg',
                    title: 'Lookbook 2015',
                    subtitle: 'show your product with style',
                    button1: 'men',
                    button2: 'women'

                },
                {
                    img: 'img/home1_slide_three_bg_2.jpg',
                    title: 'Brand New Arrival',
                    subtitle: 'new collection from new york',
                    button1: 'view all',
                    button2: 'lookbook'

                },
                {
                    img: 'img/home1_slide_one_bg.jpg',
                    title: 'Avada Classic Shop',
                    subtitle: 'show your product with style',
                    button1: 'get avada now!',
                    button2: ''

                }
            ],
        }      
    },

    methods: {
        //funzione per fare leggere il percorso delle immagini dal webpack
        getImg(img) {
        return require('../assets/'+ img);
        },

        // funzione per mandare avanti la foto
        nextPhoto(){

            if(this.counter == this.slide.length - 1){
                this.counter = 0;
            } else{
                this.counter++;
            }

            console.log(this.counter);
            
        },

        // funzione per mandare indietro la foto
        backPhoto(){

            if(this.counter == 0){
                this.counter = this.slide.length - 1;
            }else{
                this.counter--;
            }
            console.log(this.counter);
        },


    }
        
    

}
</script>

<style lang="scss">
    @import '../style/mixin.scss';

    #home_slider{
        display: flex;

        // formattazione contenitore immagine
        .box_img{
            width: 100%;
            height: 500px;
            background-color: red;
            position: relative;

            // formattazione pulsanti cambio immagine al passaggio sopra
            &:hover .btn_left,
            &:hover .btn_right{
                opacity: 1;
            }

            // formattazione immagine
            .img{
                width: 100%;
                height: 500px;
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }

            // formattazione bottoni cambio immagine con mixin
            .btn_left{
                left:0;
                @include changeButton()
            }

            .btn_right{
                right:0;
                @include changeButton()

            }

            // formattazione info immagine
            .info{
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                color: white;

                h2{
                    font-size: 75px;
                    font-weight: bold;
                }

                // formattazione pulsanti delle info immagine
                .btn_choise{

                    &:hover{
                        background-color: rgba(255, 255, 255, 0);
                    }
                    @include btnSelectShop()  
                  
                }
            }
        }
    }

</style>