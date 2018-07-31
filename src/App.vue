<template>
  <div id="app">
    <Head v-if="a"></Head>
    
  </div>
</template>

<script>
import Head from '@/page/Head'
import Header from '@/page/Header'
export default {
  name: 'App',
  data () {
    return {
      a: true
    }
  },
  components: {
    Head,
    "Header":Header
  }
}
</script>
<style lang="stylus">

.router-fade-enter-active
  transition opacity .3s
.router-fade-leave-active
  transition opacity .3s
.router-fade-enter
  opacity 0
.router-fade-leave-active
  opacity 0
</style>

