<template>
  <nav class="header_bottom">
    <div class="my_container">
      <div class="row align-items-center my_h100">
        <div class="col-12 d-flex justify-content-between">

          <!-- inizio sezione di sinistra con il logo -->
          <div class="logo">
            <img src="@/assets/img/classic_shop_logo1x.png" alt="logo avada">
          </div>
          <!-- fine sezione di sinistra con il logo -->

          <!-- inizio sezione di destra -->
          <div class="nav_bar d-flex">
            <!-- iniizo menu -->
            <Dropdown/>
            <!-- fine menu -->

            <!-- inizio bottone -->
            <div>
              <div class="btn ms-3">Shop Now!</div>
            </div>
            <!-- fine bottone -->

            <!-- icona cerca -->
            <div class="p-1 ps-3">
              <i class="fas fa-search"></i>
            </div>

          </div>
          <!-- fine sezione di destra -->

          


        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Dropdown from '@/components/Dropdown.vue'

export default {
  name: 'HeaderBottom',

  components:{
    Dropdown
  }

}
</script>

<style lang="scss">

  .header_bottom{
    height: 100px;
    border-bottom: 1px solid lightgrey;

    // formattazione per il bottone
    .btn{
      padding: 10px 15px;
      background-color: #427ed1;
      border-radius: 20px;
      color: white;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 11px;

      // formattazione bottone al passaggio sopra
      &:hover{
        background-color: #4c8be0;
        color: white;
      }
    }

    // formattazione icona cerca
    i{
      align-self: center;
      padding: 0 15px;
      font-size: 11px;
      cursor: pointer;

      // formattazione icona cerca al passaggio sopra
      &:hover{
        color: #787c7f;;
      }
    }

  }

</style>