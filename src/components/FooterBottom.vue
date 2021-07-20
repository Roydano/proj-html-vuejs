<template>
  <section id="footer-bottom">
      <div class="container">
          <div class="row">
              <div class="col text-center py-3">
                  <p>©Copyright 2012-2020 | Avada Theme by <span>Theme Fusion</span> | All Rights Reserved | Powered by <span>Wordpress</span></p>
                  <img src="@/assets/img/payment_cards_footer.png" alt="pay card">
              </div>
          </div>
      </div>

  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">

    #footer-bottom{
        background-color: #1d1f22;

        p{
            color: #eaeaea;
            font-size: 14px;

            span{
                cursor: pointer;

                &:hover{
                    color: #427ed1;
                }
            }
             
        }
    }

</style>