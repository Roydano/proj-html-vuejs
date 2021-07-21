<template>
    <section id="drop-menu">
        <nav class="navbar py-0 navbar-expand-lg navbar-light">
            <div>
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">

                        <li v-for="(item, index) in menu" :key="index" class="nav-item dropdown mx-2">
                            <!-- se il link non contiene sottomenu -->
                            <a v-if="item.dropdown == '' " class="nav-link a_clr first" href="#" id="navbarDropdownMenuLink">
                                {{item.link}}
                            </a>
                            <!-- se il link contiene sottomenu -->
                            <a v-else class="nav-link dropdown-toggle ms_dropdown_icon a_clr first" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {{item.link}}
                            </a>
                            <!-- se il sottomenu non contiene immagini -->
                            <ul v-if="item.img == ''" class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li v-for="el in item.dropdown" :key="el"><a class="dropdown-item second py-3" href="#">{{el}}</a></li>
                            </ul>
                            <!-- se il sottomenu contiene immagini -->
                            <ul v-else class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li>
                                    <div class="img_drop_box d-flex">
                                        <div class="img_drop_card">

                                            <h6>Men</h6>
                                            <img src="@/assets/img/promotion_men_img-400x542.jpg" alt="men">

                                        </div>
                                        <div class="img_drop_card">

                                            <h6>Women</h6>
                                            <img src="@/assets/img/promotion_women_img-400x542.jpg" alt="women">

                                        </div>
                                        <div class="img_drop_card">

                                            <h6>Accessories</h6>
                                            <img src="@/assets/img/promotion_accessories_img-400x542.jpg" alt="accessories">

                                        </div>
                                        <div class="img_drop_card">

                                            <h6>Promotion</h6>
                                            <img src="@/assets/img/sidebar_promotion_img-400x542.jpg" alt="promotion">

                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </section>
    
</template>

<script>
import ListItem from '@/data/ListItem.js'

export default {
    name: 'Dropdown',

    data(){
        return{
           menu: ListItem,
        }
    },

    methods:{
    }

}
</script>

<style lang="scss">

    #drop-menu{

        .dropdown-menu{
            min-width: auto;
            border: none;
        }
            // formattazione frecce dropdown
        .ms_dropdown_icon::after{
            width: 0.4em;
            height: 0.4em;
            border-right: 0.15em solid #a0a5a5 !important;
            border-top: 0.15em solid #a0a5a5 !important;
            border-left: 0 !important;
            transform: rotate(135deg);
            vertical-align: middle;
            
        }

        .a_clr{
            color: #a0a5a5 !important;
            font-size: 13px;
        }
                

        // formattazione al passaggio sopra gli elementi
        li:hover .first{
            color: #427ed1 !important;
        }

        // formattazione a
        .second{
            color: #a0a5a5;
            font-weight: bold;
            width: auto;
            font-size: 14px;

            &:hover{
            background-color: #f6f6f6;
            color: #575c61;
            }
        }

        // formattazione contenitore menu con prodotti
        .img_drop_box{
            position: absolute;
            left: -565px;
            top: 20px;

            .img_drop_card{
            width: 250px;
            background: white;
            padding: 20px 30px;
            cursor: pointer;

            h6{
                font-weight: bold;
                padding-bottom:10px;
            }

            img{
                width: 100%;
                transition: all 1s;

                &:hover{
                    transform: scale(1.05);
                    box-shadow: 5px 5px 6px rgba(0, 0, 0, 0.507);
                }
            }
            }
        }
        
    }

           
   

</style>