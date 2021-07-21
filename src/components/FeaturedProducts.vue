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
          <div class="col-12 d-flex justify-content-center">
                <div v-for="(item, index) in type" :key="index" class="dropdown">
                    <button @click="value = item"  type="button" data-bs-toggle="dropdown" aria-expanded="false" :value="value">
                        {{item}}
                    </button>
                </div>
          </div>
      </div>
      <!--fine sezione contenuto bottoni -->

      <!-- inizo sezione contenitore foto -->
      <!-- se è stato cliccato men -->
      <div v-if="this.value == 'men' || this.value == '' " class="row img_box_dropdown justify-content-between mt-5" :value="this.value">
          <div v-for="(obj, index) in men" :key="index" class="col-3 flex-column">
                <div class="img_box_product">
                    <img :src="getImg(obj.img)" :alt="obj.title">
                    <div class="action">
                        <p><i class="fas fa-shopping-cart me-2"></i>Add to cart</p>
                        <p><i class="fas fa-list me-2"></i>Details</p>
                    </div>
                </div>
                <h6 class="mt-3 fw-bold neg_mb_2">{{obj.title}}</h6>
                <span class="subtitle_tag_clothes">{{obj.tag}}</span>
                <!-- se l'oggetto non è scotato -->
                <div v-if="obj.priceFull == ''" class="price">
                    <span class="price_official">{{obj.priceLower}}</span>
                </div>
                <!-- se l'oggetto è scontato -->
                <div v-else class="price">
                    <span class="price_full">{{obj.priceFull}}</span>
                    <span class="price_official">{{obj.priceLower}}</span>
                </div>
          </div>
      </div>

      <!-- se è stato cliccato women -->
      <div v-if="this.value == 'women'" class="row img_box_dropdown justify-content-between mt-5" :value="this.value">
          <div v-for="(obj, index) in women" :key="index" class="col-3 flex-column">
                <div class="img_box_product">
                    <img :src="getImg(obj.img)" :alt="obj.title">
                    <div class="action">
                        <p><i class="fas fa-shopping-cart me-2"></i>Add to cart</p>
                        <p><i class="fas fa-list me-2"></i>Details</p>
                    </div>
                </div>
                <h6 class="mt-3 fw-bold neg_mb_2">{{obj.title}}</h6>
                <span class="subtitle_tag_clothes">{{obj.tag}}</span>
                <!-- se l'oggetto non è scotato -->
                <div v-if="obj.priceFull == ''" class="price">
                    <span class="price_official">{{obj.priceLower}}</span>
                </div>
                <!-- se l'oggetto è scotato -->
                <div v-else class="price">
                    <span class="price_full">{{obj.priceFull}}</span>
                    <span class="price_official">{{obj.priceLower}}</span>
                </div>
          </div>
      </div>

      <!-- se è stato cliccato accessories -->
      <div v-if="this.value == 'accessories'" class="row img_box_dropdown justify-content-between mt-5" :value="this.value">
          <div v-for="(obj, index) in accessories" :key="index" class="col-3 flex-column">
                <div class="img_box_product">
                    <img :src="getImg(obj.img)" :alt="obj.title">
                    <div class="action">
                        <p><i class="fas fa-shopping-cart me-2"></i>Add to cart</p>
                        <p><i class="fas fa-list me-2"></i>Details</p>
                    </div>
                </div>
                <h6 class="mt-3 fw-bold neg_mb_2">{{obj.title}}</h6>
                <span class="subtitle_tag_clothes">{{obj.tag}}</span>
                <!-- se l'oggetto non è scotato -->
                <div v-if="obj.priceFull == ''" class="price">
                    <span class="price_official">{{obj.priceLower}}</span>
                </div>
                <!-- se l'oggetto è scotato -->
                <div v-else class="price">
                    <span class="price_full">{{obj.priceFull}}</span>
                    <span class="price_official">{{obj.priceLower}}</span>
                </div>
          </div>
      </div>
      <!-- fine sezione contenitore -->

  </section>
</template>

<script>
import MenObject from '@/data/MenObject.js'
import WomenObject from '@/data/WomenObject.js'
import AccessoriesObject from '@/data/AccessoriesObject.js'



export default {
    name: 'FeaturedProducts',

    data(){
        return{
            value:'',
            counteType: 0,
            type:['men', 'women', 'accessories'],
            men: MenObject,
            women: WomenObject,
            accessories: AccessoriesObject
            
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

    #featured-products{

        // margini per distanziare la sezione
        .my_margin{
            margin-top: 70px;
            height: auto;
            align-items: center;

            // linee orizzontali del titolo
            .line{
            height: 1px;
            width: 100%;
            background-color: lightgrey;
            } 
            
        }

        // sezione dei pulsanti di scelta
        .dropdown{
            button{
                @include btnChoiseModels();
                &:hover{
                    background-color: #f6f6f6;
                }
            }
            // per dare il bordo di destra solo all'ultimo elemento
            &:last-child button{
                border-right: 1px solid lightgrey;
            }
        }

        // contenitore prodotto
        .img_box_dropdown{
            height: 500px;
            width: 100%;
            
            // formattazione per sfondo sfumato
            .img_box_product{
                position: relative;
                height: 260px;
                width: 200px;
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
                }

                // formattazione dettagli che compaiono quando passo sopra la foto
                .action{
                    display: none;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    color: white;
                    line-height: 0.5;
                    text-align: center;
                    font-size: 11px;
                }
            }
        }

       

        

        
    }

</style>

 