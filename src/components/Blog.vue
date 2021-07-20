<template>
  <section id="blog" class="my_container">
        <!-- inizio sezione titolo -->
        <div class="row d-flex text-center my_margin">
            <div class="col-lg-4">
                <div class="line"></div>
            </div>
            <div class="col-lg-4">
                <h2 class="fw-bold h_size_36">From Our Blog</h2>
            </div>
            <div class="col-lg-4">
                <div class="line"></div>
            </div>
        </div>
        <!-- fine sezione titolo -->

        <!-- inizio sezione sottotitolo -->
        <div class="row my_margin-r0 mb-5">
            <div class="col-12 text-center">
                <p class="p_style">The latest Classic Shop news</p>
            </div>
        </div>
        <!-- fine sezione sottotitolo -->

        <!-- iniizo sezione foto -->
        <div class="row">
            <div v-for="(obj, index) in blog" :key="index" class="col-4">
                <div class="img_blog mb-3">
                    <img :src="getImg(obj.img)" :alt="obj.title">
                </div>
                <h6 class="fw-bold">{{obj.title}}</h6>
                <p class="p_style my_fs_14">{{obj.date}}</p>
                <p class="p_style">{{obj.text}}</p>
            </div>
        </div>
        <!-- fine sezione foto -->
  </section>
</template>

<script>
import BlogObject from '@/data/BlogObject.js'

export default {
    name: 'Blog',

    data(){
        return{
            blog: BlogObject
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

    #blog{
        .my_margin-r0{
            margin-right: 0 !important;
        }

        .my_fs_14{
            font-size: 14px;
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

        // formattazione per immagini del blog
        .img_blog{
            max-width: 100%;
            overflow-x: hidden;
            overflow-y: hidden;

            img{
                width: 100%;
                transition: 1s;

                &:hover{
                    transform: scale(1.1);
                    opacity: 0.9;

                    
                }
            }

        }
    }

</style>