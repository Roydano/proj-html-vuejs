<template>
  <section id="footer-center">
      <div class="my_container">
          <div class="row">
                <!-- iniizo prima colonna con logo e dettagli azienda -->
                <div class="col-3 padding">
                    <div class="logo pb-5">
                        <img src="@/assets/img/classic_shop_logo_footer.png" alt="avada logo black and white">
                    </div>
                    <div class="avada_info pb-5">
                            <p>12345 North Main Street,</p>
                            <p>New York, NY 555555</p>
                            <p>Phone: 1.800.555.6789</p>
                            <p>Email: info@company.com</p>
                            <p>Web: Theme-fusion.com</p>
                    </div>
                    <SocialIcon/>
                </div>
                <!-- fine prima colonna con logo e dettagli azienda -->

                <!-- inizio seconda colonna con prodotti -->
                <div class="col-3 padding">
                    <h6 class="pb-3 text-uppercase">top rated products</h6>
                    <CardProductList :product="topRated" class="top_rated"/>
                </div>
                <!-- fine seconda colonna con prodotti -->

                <!-- iniizo terza colonna con post recenti -->
                <div class="col padding ms-3">
                    <h6 class="pb-3 text-uppercase">recent posts</h6>
                     <ul>
                        <li v-for="item in posts" :key="item" class="post">
                            <i class="fas fa-chevron-right"></i><span>{{item}}</span>
                        </li>
                    </ul>

                </div>
                <!-- fine terza colonna con post recenti -->

                <!-- iniizo quarta colonna con tag -->
                <div class="col-3 padding ps-3">
                    <h6 class="pb-3 text-uppercase">tags</h6>
                    <div class="tag d-flex flex-wrap">
                        <span v-for="item in tags" :key="item" class="my_tag">{{item}}</span>
                    </div>
                   
                </div>
                <!-- fine quarta colonna con tag -->
          </div>
      </div>
  </section>
</template>

<script>
import SocialIcon from '@/components/SocialIcon.vue'
import TopRated from '@/data/TopRated.js'
import CardProductList from '@/components/CardProductList.vue'
import Tags from '@/data/Tags.js'


export default {
    name: 'FooterCenter',

    data(){
        return{

            topRated: TopRated,
            posts: [
                'Aenean lobortis sapien enim viverra',
                'Duis ac massa semper maximus',
                'Nunc fermint nulla eu justo sem id',
                'Aliquam posuere magna eget nibh',
                'Cras ac nulla ac consecte rutrum',
                'Fusce mattis nunc ut aliquam'
            ],
            tags: Tags
        }
    },

    components:{
    SocialIcon,
    CardProductList
  }


}
</script>

<style lang="scss">

    #footer-center{
        background-color: #2b2e32;

        h6{
            color: #eaeaea;
            font-size: 14px;
            font-weight: bold;
        }

        ul{
                padding-left: 0;
            }

        // inizio formattazione colonna con logo e dati azienda
        .logo{
            img{
                width: 70%;
            }
        }

        .avada_info{
            line-height: 0.6;
            color: #eaeaea;

        }

        i{
            margin: 6px;
            color: #eaeaea;

            &:hover{
                color: #c3c4c5;
            }
        }
        // fine formattazione colonna con logo e dati azienda

        // inizio formattazione colonna con prodotti
        .top_rated{

            li{
                color: #eaeaea;;

                .my_bb{
                    border-bottom: 1px solid #35383c;
                    padding-bottom: 10px;
                    padding-top: 10px;
                }

                i{
                    margin: 0;
                    color: #427ed1;
                }

                img{
                    width: 70%;
                }
            }
        }
        // fine formattazione colonna con prodotti

        // inizio sezione lista post
        .post{
            color: #eaeaea;
            font-size: 13px;
            border-bottom: 1px solid #35383c;
            padding-bottom: 10px;
            padding-top: 10px;
            cursor: pointer;
                

            i{
                font-size: 11px;
            }

            &:hover,
            &:hover i{
                color: #427ed1;
            }
            
        }
        // fine sezione lista post

        // inizio sezione tag
        .my_tag{
            color: #eaeaea;
             font-size: 13px;
             border: 1px solid #35383c;
             padding: 5px 8px;
             margin: 2px;
             cursor: pointer;
             transition: background-color 1s;

             &:hover{
                 background-color: #427ed1;
             }
        }
        // fine sezione tag
    }

</style>