<template>
  <section id="best-seller" class="my_container">
      <!-- inizio sezione titolo -->
      <div class="row d-flex text-center my_margin">
            <div class="col-lg-4">
                <div class="line"></div>
            </div>
            <div class="col-lg-4">
                <h2 class="fw-bold h_size_36">Best Seller</h2>
            </div>
            <div class="col-lg-4">
                <div class="line"></div>
            </div>
      </div>
      <!-- fine sezione titolo -->

      <!-- inizio sezione sottotitolo -->
      <div class="row">
          <div class="col text-center">
                <p class="p_style">Must have products from our top sellers</p>
          </div>
      </div>
      <!-- fine sezione sottotitolo -->
  </section>
</template>

<script>
export default {
    name: 'BestSeller'

}
</script>

<style lang="scss">
    #best-seller{

        // margini per distanziare la sezione
        .my_margin{
            margin-top: 70px;
            height: auto;
            align-items: center;

            // linee orizzontali del titolo
            .line{
            height: 1px;
            width: 100%;
            background-color: lightgrey;
            } 
            
        }
    }

</style>