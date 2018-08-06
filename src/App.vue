<template>
  <div id="app">
    <div class="head">
      <Head></Head>
    </div>
  </div>
</template>

<script>
import Head from '@/page/Head'
export default {
  name: 'App',
  data () {
    return {
      // showHeader:""
    }
  },
  components: {
    Head
  },
  computed: {
    // showHeader() {
    //   return this.$store.state.showHeader
    // }
  }
}
</script>
<style lang="stylus">

</style>

