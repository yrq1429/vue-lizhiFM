<template>
  <div class="found">
    <div class="header_swiper">
      <app-banner :listImg="Broadcast"></app-banner>
    </div>
  </div>
</template>
<script>
import { getBroadcast } from '@/api/getData'
import Banner from '@/components/Banner'
export default {
  data() {
    return {
      Broadcast: [],
      sumHotData: []
    }
  },
  components: {
    "app-banner": Banner
  },
  async mounted () {
        const data = await getBroadcast();
        const bUrl= data.data.Broadcast.url;
        this.Broadcast = bUrl;
    },
  methods: {
    
  }
}
</script>

<style lang="stylus">

</style>
