<template >
    <section id="testimonial">
        <carousel class="bg_sfondo text-center" :per-page="1" :mouse-drag="false">
            <!-- inizio testimonial 1 -->
            <slide>
                <div class="img_testimonial my-5">
                    <img src="@/assets/img/man_testimonial.png" alt="man testimonial">
                </div>
                <p class="fst-italic my_container mb-3">Curabitur non tristique tortor. Vestibulum aliquet suscipit ipsum in volutpat. Donec vel lacinia sem, vitae semper nulla. In hac habitasse platea dictumst. Mauris consectetur est et nibh sadip hendrerit bibendum. </p>
                <p><span class="fw-bold">Darío Pineda,</span> Theme Fusion</p>
            </slide>
            <!-- fine testimonial 1 -->

            <!-- inizio testimonial 2 -->
            <slide>
                <div class="img_testimonial my-5">
                    <img src="@/assets/img/woman_testimonial.png" alt="women testimonial">
                </div>
                <p class="fst-italic my_container mb-3">Proin blandit metus vel magna dignissim varius. Morbi enim lorem, sollicitudin vitae ante nec, rutrum venenatis neque. In mi augue, iaculis nec dui ac, condimentum consequat velit. Ut et metus justo. </p>
                <p><span class="fw-bold">Lisa Smith,</span> Theme Fusion</p>
            </slide>
            <!-- fine testimonial 2 -->
        </carousel>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">

    #testimonial{
        .bg_sfondo{
            background-image: url('../assets/img/testimonials_home_1_bg.jpg');
            text-align: center;
            padding: 50px 0;
        }

        p{
            font-size: 18px;
            color: white;
            font-family: Arial, Helvetica, sans-serif;
        }
    }

</style>