<template>
  <div id="app">
    <!-- inizio header -->
    <Header/>
    <!-- fine header -->
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style lang="scss">

//importiamo il foglio con gli stili da applicare a tutta la pagina web
@import '@/style/common.scss';


</style>
