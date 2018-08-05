<template>
  <div class="found">
    <div class="voice_list">
      <div class="voice_list-item">
        <div class="img">
          <img src="../assets/images/voice1.png" alt="">
        </div>
        <p class="title">甜蜜哄睡</p>
      </div>
      <div class="voice_list-item">
        <div class="img">
          <img src="../assets/images/voice2.png" alt="">
        </div>
        <p class="title">惊奇物语</p>
      </div>
      <div class="voice_list-item">
        <div class="img">
          <img src="../assets/images/voice3.png" alt="">
        </div>
        <p class="title">就想听歌</p>
      </div>
      <div class="voice_list-item">
        <div class="img">
          <img src="../assets/images/voice4.png" alt="">
        </div>
        <p class="title">轻松一刻</p>
      </div>
    </div>
    <div class="header_swiper">
      <app-banner :listImg="Broadcast"></app-banner>
    </div>
    <div class="guessLike_content">
      <div class="guessLike_title">猜你喜欢</div>
      <div class="guessLike_list">
        <guess-like :arrayList="guessList"></guess-like>
      </div>
    </div>
  </div>
</template>
<script>
import { getGuessLike, getBroadcast } from '@/api/getData'
import Banner from '@/components/Banner'
import GuessLike from '@/components/GuessLike'
export default {
  data() {
    return {
      Broadcast: [],
      sumHotData: [],
      guessList: []
    }
  },
  components: {
    "app-banner": Banner,
    "guess-like": GuessLike
  },
  
  async mounted () {
    const list = await getBroadcast();
    this.Broadcast = list.data.Broadcast.url;
    const data = await getGuessLike();
    const bUrl= data.guessLike;
    this.guessList = bUrl;
    },
  methods: {
    
  }
}
</script>

<style lang="stylus">
.header_swiper
  margin 15px 10px
.voice_list
  width 100%
  height 50px
  margin-bottom 30px
  display flex
  .voice_list-item
    flex 1
    justify-content center
    align-items center
    img 
      width 40px
      height 32px
    .img 
      text-align center
    .title
      margin 0
      padding 0
      text-align center
.guessLike_content
  border-top 10px solid #eee
  .guessLike_title
    width 100%
    height 20px
    padding 10px
    font-weight bold
</style>
