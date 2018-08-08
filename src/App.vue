<template>
  <div id="app">
    <div class="head" v-if="showHeader">
      <Head></Head>
    </div>
    <router-view ></router-view>
    
    <div class="view">
    </div>   
  </div>
</template>

<script>
import Head from '@/page/Head'
import ListenContent from '@/components/ListenContent/ListenContent'
export default {
  name: 'App',
  data () {
    return {

    }
  },
  components: {
    Head,
    ListenContent
  },
  computed: {
    showHeader() {
      return this.$store.state.showHeader
    },
    showListenContent() {
      return this.$store.state.showListenContent      
    }
  }
}
</script>
<style lang="stylus">

</style>

