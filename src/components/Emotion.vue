<template>
  <div>
    <listen-list :sumHotData="EmotionList"></listen-list>
  </div>
</template>

<script>
import {  getHotLive } from '@/api/getData'
import ListenList from '@/components/ListenList'
export default {
  data () {
    return{
      EmotionList : []
    }
  },
  components: {
    "listen-list": ListenList
  },
  async mounted () {
        const hotData = await getHotLive();
        this.EmotionList = hotData.hot;
    },
}
</script>


<style>

</style>
