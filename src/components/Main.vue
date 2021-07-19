<template>
  <main>
      <!-- iniizo sezione featured product -->
      <FeaturedProducts/>
      <!-- fine sezione featured products -->

  </main>
</template>

<script>
import FeaturedProducts from '@/components/FeaturedProducts.vue'

export default {
    name: 'Main',

    components:{
        FeaturedProducts
    }

}
</script>

<style>

</style>