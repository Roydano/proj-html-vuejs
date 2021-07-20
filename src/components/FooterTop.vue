<template>
  <section id="footer-top">
      <div class="my_container">
          <div class="row align-items-center padding">
              <!--inizio sezione di sinistra -->
              <div class="col-7 d-flex align-items-center">
                  <div class="icon_msg">
                    <i class="far fa-envelope"></i>
                  </div>
                  <h3 >Subscribe now and get special offers</h3>
              </div>
              <!-- fine sezione di sinistra -->

              <!-- inizio sezione di destra -->
              <div class="col-5 d-flex ">
                  <div class="subscribe">
                      <input type="text" placeholder="Insert your email">
                      <button class="btn">send</button>
                  </div>
              </div>
              <!-- fine sezione di destra -->
          </div>
      </div>
      
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    #footer-top{
        background-color: #303337;

        // formattazione icona messaggio
        .icon_msg{
            height: 50px;
            width: 50px;
            background-color: #2b2e32;
            border-radius: 50%;
            text-align: center;
            line-height: 50px;

            i{
                color: #74797f;
                font-size: 20px;
            }
        }

        
        // formattazione testo
        h3{
            color: white;
            font-weight: bold;
            margin-left: 10px;
        }

        // formattazione casella di input
        input{
            font-size: 14px;
            padding: 5px 30px;
            border-radius: 20px;
            width: 240px;
            margin-right: 10px;
        }

        // formattazione bottone
        .btn{
            padding: 10px 30px;
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
    

    }

</style>