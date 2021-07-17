<template>
  <nav class="d-flex nav">
      <!-- iniizo lista -->
      <ul>
          <!-- creato un ciclo per prendere tutti gli elementi della lista -->
          <li v-for="(item, index) in menu" :key="index">
              <a href="#">{{item.link}}</a>
              <i v-if="item.dropdown != ''" class="fas fa-chevron-down"></i>
          </li>
      </ul>
      <!-- fine lista -->
  </nav>
</template>

<script>
import ListItem from '@/data/ListItem.js'
export default {
    name: 'MenuList',

    data(){
        return{
            //creato array che contiene tutti gli elementi della lista da ciclare
            menu: ListItem,

        }
    }

}
</script>

<style lang="scss">

    .nav{
        // formattazione lista menu
        li{
            display: inline-block;
            margin: 0 10px;
            
            // formattazione del primo elemento della lista
            &:first-child{
                border-top: 2px solid #427ed1;

                a{
                color: #427ed1;
                }

                i{
                color: #427ed1;
                } 
            }

            // formattazione al passaggio sopra gli elementi
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