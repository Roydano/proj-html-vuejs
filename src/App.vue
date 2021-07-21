<template>
  <div id="app">
    <!-- inizio header -->
    <Header/>
    <!-- fine header -->

    <!-- inizio Main -->
    <Main/>
    <!-- fine main -->

    <!-- inizio footer -->
    <Footer/>
    <!-- fine footer -->
    
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Main from '@/components/Main.vue'
import Footer from '@/components/Footer.vue'





export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer,
  }
}
</script>

<style lang="scss">

//importiamo il foglio con gli stili da applicare a tutta la pagina web
@import '@/style/common.scss';


</style>
