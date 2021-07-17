<template>
  <nav class="d-flex nav">
      <ul>
          <li v-for="(item, index) in menu" :key="index"><a href="#">{{item}}</a><i class="fas fa-chevron-down"></i></li>
      </ul>
  </nav>
</template>

<script>
export default {
    name: 'MenuList',

    data(){
        return{
            menu:['Home', 'Shop', 'Products', 'Categories', 'News', 'Elements']

        }
    }

}
</script>

<style lang="scss">

    .nav{
        li{
            display: inline-block;
            margin: 0 10px;

            &:first-child{
                border-top: 2px solid #427ed1;

                a{
                color: #427ed1;
                }

                i{
                color: #427ed1;
                } 
            }

            &:hover a,
            &:hover i{
                color: #427ed1;
            }


            a{
                color: #a0a5a5;
                font-size: 13px;
            }

            i{
                color: #a0a5a5;
                font-size: 10px;
                padding: 0 5px;
            }
        }
    }

</style>