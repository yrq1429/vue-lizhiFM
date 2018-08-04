<template>
  <div class="hotList">
    <listen-list :sumHotData="HotList"></listen-list>
  </div>
</template>

<script>
import {  getHotLive } from '@/api/getData'
import ListenList from '@/components/ListenList'
export default {
  data () {
    return{
      HotList : []
    }
  },
  components: {
    "listen-list": ListenList
  },
  async mounted () {
        const hotData = await getHotLive();
        this.HotList = hotData.hot;
        console.log(this.HotList)
    },
}
</script>

<style lang="stylus">

</style>
