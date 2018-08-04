<template>
  <div>
    <listen-list :sumHotData="musicList"></listen-list>
  </div>
</template>

<script>
import {  getHotLive } from '@/api/getData'
import ListenList from '@/components/ListenList'
export default {
  data () {
    return{
      musicList : []
    }
  },
  components: {
    "listen-list": ListenList
  },
  async mounted () {
        const hotData = await getHotLive();
        this.musicList = hotData.hot;
        console.log(this.musicList)
    },
}
</script>


<style>

</style>
