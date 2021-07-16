<template>
  <div class="header_top">
    <div class="my_container">
      <div class="row">
        <div class="col d-flex justify-content-between">
          <div class="lef_side">
            <SocialIcon/>
          </div>
          <div class="right_side">
            <ul>
              <li>Sopping Cart</li>
              <li>My Account<i class="fas fa-chevron-down"></i></li>
              <li><i class="fas fa-shopping-cart"></i>Cart<i class="fas fa-chevron-down"></i></li>
            </ul>

          </div>
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

  .my_container{
    max-width: 70%;
    margin: 0 auto;

    li{
      display: inline-block;
      padding: 0 15px;
      border-right: 1px solid lightgrey;
      font-size: 14px;

      &:last-child{
        border-right: none;
        margin-left: 70px;
        text-transform: uppercase;

        i{
          margin-right: 10px;
          font-size: 12px;

          &:last-child{
            margin-left: 10px;
            font-size: 16px;
          }
        }
      }

      i{
        margin-right: 0;
        margin-left: 15px;
        font-size: 10px;
      }
    }
  }

  

</style>