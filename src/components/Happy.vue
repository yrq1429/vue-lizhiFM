<template>
  <div>
    <listen-list :sumHotData="happyList"></listen-list>
  </div>
</template>

<script>
import {  getHotLive } from '@/api/getData'
import ListenList from '@/components/ListenList'
export default {
  data () {
    return{
      happyList : []
    }
  },
  components: {
    "listen-list": ListenList
  },
  async mounted () {
        const hotData = await getHotLive();
        this.happyList = hotData.hot;
    },
}
</script>


<style>

</style>
