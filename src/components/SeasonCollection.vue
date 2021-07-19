<template>
  <section class="container-fluid">
      <div class="row">
          <div v-for="(item, index) in season" :key="index" class="col-4 season_coll">
                <div class="img_box">
                    <img :src="getImg(item.img)" :alt="item.title">
                </div>
                <div class="box_season info text-center">
                    <h2>{{item.title}}</h2>
                    <h6 class="text-uppercase">{{item.subtitle}}</h6>
                    <div class="btn d-flex justify-content-center mt-3">
                        <div class="btn_choise me-3">{{item.button}}</div>
                    </div>
                </div>
          </div>
      </div>
  </section>
</template>

<script>
export default {
    name: 'SeasonCollection',

    data(){
        return{
            season:[
                {
                    img:'img/winter_collection_bg.jpg',
                    title:'Winter Collection',
                    subtitle:'stylish and warm',
                    button:'view more'
                },

                {
                    img:'img/spring_collection_bg.jpg',
                    title:'Spring Collection',
                    subtitle:'bright and colorful',
                    button:'view more'
                },

                {
                    img:'img/autumn_collection_bg.jpg',
                    title:'Autumn Collection',
                    subtitle:'rich and comfortable',
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


    .season_coll{
        height: 500px;
        width: 100%;
        background-color: red;
        position: relative;
        padding: 0 !important;
        overflow: hidden;

        img{
            width: 100%;
        }
       
        

        // formattazione info immagine
            .info{
                position: absolute;
                left: 50%;
                top: 60%;
                transform: translate(-50%);
                color: white;
                width: auto;

                h2{
                    font-size: 26px;
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

</style>