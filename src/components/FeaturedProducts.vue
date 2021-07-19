<template>
  <section id="featured-products" class="my_container">
      <!-- inizio sezione titolo -->
      <div class="row d-flex text-center my_margin">
            <div class="col-lg-4">
                <div class="line"></div>
            </div>
            <div class="col-lg-4">
                <h2 class="fw-bold h_size_36">Featured Products</h2>
            </div>
            <div class="col-lg-4">
                <div class="line"></div>
            </div>
      </div>
      <!-- fine sezione titolo -->

      <!-- inizio sezione sottotitolo -->
      <div class="row">
          <div class="col text-center">
                <p class="p_style">Must have products from our top sellers</p>
          </div>
      </div>
      <!-- fine sezione sottotitolo -->

      <!-- inizio sezionebottoni -->
      <div class="row shop_genre ">
          <div class="col d-flex justify-content-center">
                <div v-for="(item, index) in type" :key="index" class="dropdown">
                    <button @click="value = item"  type="button" data-bs-toggle="dropdown" aria-expanded="false" :value="value">
                        {{item}}
                    </button>
                </div>
          </div>
      </div>
      <!--fine sezione contenuto bottoni -->

      <!-- iniizo sezione contenitore foto -->
      <div v-if="this.value == 'men' || this.value == ''" class="row img_box_dropdown justify-content-between mt-5" :value="this.value">
          <div v-for="(obj, index) in men" :key="index" class="col-3 flex-column">
                <img :src="getImg(obj.img)" :alt="obj.title">
                <h6 class="mt-3 fw-bold neg_mb_2">{{obj.title}}</h6>
                <span class="subtitle_tag_clothes">{{obj.tag}}</span>
                <div v-if="obj.priceFull == ''" class="price">
                    <span class="price_official">{{obj.priceLower}}</span>
                   
                </div>
                <div v-else class="price">
                    <span class="price_full">{{obj.priceFull}}</span>
                    <span class="price_official">{{obj.priceLower}}</span>
                </div>
          </div>
      </div>
      <!-- fine sezione contenitore foto -->

  </section>
</template>

<script>
import MenObject from '@/data/MenObject.js'

export default {
    name: 'FeaturedProducts',

    data(){
        return{
            value:'',
            counteType: 0,
            type:['men', 'women', 'accessories'],
            men: MenObject
            
            }
    },

    methods:{
        getImg(img) {
        return require('../assets/'+ img);
        },
        
    }

}
</script>

<style lang="scss">
@import '../style/mixin.scss';

    #featured-products{

        .my_margin{
            margin-top: 70px;
            height: auto;
            align-items: center;

            .line{
            height: 1px;
            width: 100%;
            background-color: lightgrey;
            } 
            
        }

        .dropdown{
            button{
                @include btnChoiseModels();
                &:hover{
                    background-color: #f6f6f6;
                }
            }
            &:last-child button{
                border-right: 1px solid lightgrey;
            }
        }

        .img_box_dropdown{
            height: 500px;
            width: 100%;
        }

       

        

        
    }

</style>

 