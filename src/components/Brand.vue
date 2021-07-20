<template>
  <section id="brand" class="mt-5">
      <div class="background_brand py-5">
            <h6 class="text-center text-uppercase my_letter_spacing_5 py-3">brand logos</h6>
            <div class="my_container">
                <carousel :per-page="5">
                    <slide data-index="0" data-name="forest" class="my_margin">
                        <img src="@/assets/img/b_logotype_1.png" alt="forest logo">
                    </slide>

                    <slide data-index="1" data-name="badge">
                        <img src="@/assets/img/b_logotype_2.png" alt="badge logo">
                    </slide>

                    <slide data-index="2" data-name="beard fashion">
                        <img src="@/assets/img/b_logotype_3.png" alt="beard fashion logo">
                    </slide>

                    <slide data-index="3" data-name="hype">
                        <img src="@/assets/img/b_logotype_4.png" alt="hype logo">
                    </slide>

                    <slide data-index="4" data-name="aeq">
                        <img src="@/assets/img/b_logotype_5.png" alt="a and q logo">
                    </slide>

                    <slide data-index="5" data-name="authentic">
                        <img src="@/assets/img/b_logotype_6.png" alt="authentic logo">
                    </slide>

                    <slide data-index="6" data-name="the yard">
                        <img src="@/assets/img/b_logotype_7.png" alt="the yard logo">
                    </slide>
                </carousel>
            </div>
        </div>
  </section>
</template>

<script>
export default {
    name: 'Brand',

    data(){
        return{
            settings:{
                "centerMode": true,
                "centerPadding": "20px",
                "focusOnSelect": true,
                "infinite": true,
                "slidesToShow": 3,
                "speed": 500
            }
        }
    }

}
</script>

<style lang="scss">

    #brand{
        .background_brand{
            background-color: #f6f6f6;
        }

        button{
            display: none;
        }
        
        .VueCarosel-slide{
            flex-shrink: initial;
            padding-left: -20px;
        }
    }

</style>