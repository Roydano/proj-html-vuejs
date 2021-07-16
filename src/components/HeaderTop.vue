<template>
  <div class="header_top">
    <div class="my_container">
      <div class="row">
        <div class="col d-flex justify-content-between">
          <!-- inizio sezione di sinistra con icone social -->
          <div class="lef_side">
            <SocialIcon/>
          </div>
          <!-- fine sezione di sinistra con icone social -->

          <!-- inizio sezione destra con azioni shop utente -->
          <div class="right_side">
            <ul>
              <li>Sopping Cart</li>
              <li>My Account<i class="fas fa-chevron-down"></i></li>
              <li><i class="fas fa-shopping-cart"></i>Cart<i class="fas fa-chevron-down"></i></li>
            </ul>
          </div>
          <!-- inizio sezione destra con azioni shop utente -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SocialIcon from '@/components/SocialIcon.vue'

export default {
  name: 'HeaderTop',
  components:{
    SocialIcon
  }

}
</script>

<style lang="scss">
  .header_top{
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid lightgrey;
  }

  // formattazione contenitore con larghezza massima per lasciare spazio ai lati
  .my_container{
    max-width: 70%;
    margin: 0 auto;

    // formattazione lista sezione di destra
    li{
      display: inline-block;
      padding: 0 15px;
      border-right: 1px solid lightgrey;
      font-size: 14px;
      color: #a0a5a5;

      // formattazione per ultimo elemento della lista
      &:last-child{
        border-right: none;
        margin-left: 50px;
        text-transform: uppercase;
        color: #575c61;

        // formattazione per carrello
        i{
          margin-right: 10px;
          font-size: 12px;
          color: #575c61;

          // formattazione per freccia cart
          &:last-child{
            margin-left: 10px;
            font-size: 16px;
          }
        }
      }

      // formattazione freccia my account
      i{
        margin-right: 0;
        margin-left: 15px;
        font-size: 10px;
        color: #a0a5a5;

      }
    }
  }

  

</style>