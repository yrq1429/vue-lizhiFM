<template>
  <div>
    <listen-list :sumHotData="ECYList"></listen-list>
  </div>
</template>

<script>
import {  getHotLive } from '@/api/getData'
import ListenList from '@/components/ListenList'
export default {
  data () {
    return{
      ECYList : []
    }
  },
  components: {
    "listen-list": ListenList
  },
  async mounted () {
        const hotData = await getHotLive();
        this.ECYList = hotData.hot;
    },
}
</script>


<style>

</style>
