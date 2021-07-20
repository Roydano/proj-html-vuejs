<template>
    <div>
        <ul>
            <li v-for="(item, index) in product" :key="index" class="pt-2">
                <div class="row my_bb d-flex justify-content-between ">
                        <div class="col-8 d-flex flex-column justify-content-between">
                        <span class="my_font_size-12">{{item.title}}</span>
                        <div v-if="item.star == true" class="my_color_star my_font_size-12">
                            <i v-for="i in 5" :key="i" class="fas fa-star"></i>
                        </div>
                        <div v-if="item.priceLower == '' && item.priceFull == '' ">
                            <span class="my_font_size-12">{{item.sign}}</span>
                        </div>
                        <div v-else class="price">
                            <div v-if="item.priceLower != ''" class="price my_font_size-12">
                                <span class="me-2 text-decoration-line-through fw-bold">{{item.priceFull}}</span>
                                <span class="text-decoration-underline fw-bold">{{item.priceLower}}</span>
                            </div>
                            <div v-else>
                                <span class="me-2 fw-bold my_font_size-12">{{item.priceFull}}</span>
                            </div>
                        </div>
                        
                    </div>
                    <div class="col-4">
                        <img :src="getImg(item.img)" :alt="item.title">
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'CardProductList',
    props:['product'],


    

    methods:{
        // per fare leggere le immagini al webpack
        getImg(img) {
        return require('../assets/'+ img);
        },
        
    }

}
</script>

<style lang="scss">

</style>