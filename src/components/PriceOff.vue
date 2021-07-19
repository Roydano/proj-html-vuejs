<template id="price-off">
  <div class="background mt-5">
      <div class="my_container">
          <!-- creazione box contenitore -->
          <div class="row justify-content-between py-5">
              <div v-for="(item, index) in priceOff" :key="index" class="col-6 position-relative">
                    <div class="img_box">
                        <img :src="getImg(item.img)" :alt="item.title">
                    </div>
                    <div class="info col-7">
                        <h2>{{item.title}}</h2>
                        <h6>{{item.subtitle}}</h6>
                        <div class="btn mt-3">
                            <div class="btn_choise me-3">{{item.button}}</div>
                        </div>
                    </div>
              </div>
          </div>
      </div>

  </div>
</template>

<script>

export default {
    name: 'PriceOff',

    data(){
        return{
            priceOff:[
                {
                    img:'img/promo_box_1_bg.jpg',
                    title:'70% Off',
                    subtitle:'Vivamus tempor leo lacus, feugiatut magna aliquam erat.',
                    button:'view more'
                },
                {
                    img:'img/promo_box_2_bg.jpg',
                    title:'Free Shipping',
                    subtitle:'Vivamus tempor leo lacus, feugiatut magna aliquam erat.',
                    button:'view more'
                }
            ]
        }
    },

    methods:{
        // per fare leggere le immagini al webpack
        getImg(img) {
        return require('../assets/'+ img);
        },
    }

}
</script>

<style lang="scss">
    @import '../style/mixin.scss';


    .background{
        background-image: url('../assets/img/bkgd_confetti-compressor.jpg');
        background-position: center;

        img{
            width: 100%;
        }
    }

    // formattazione info immagine
    .info{
        position: absolute;
        left: 10%;
        top: 30%;
        color: white;
        width: auto;

        h2{
            font-size: 40px;
            font-weight: bold;

        }

        // formattazione pulsanti delle info immagine
        .btn{
            padding-left: 0 !important;

            .btn_choise{
            font-size: 13px;

            &:hover{
                background-color: rgba(255, 255, 255, 0);
            }
            @include btnSelectShop()  
            
        }
        }
    }

</style>