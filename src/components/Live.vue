<template>
  <div class="live-content">
    <div class="head_Broadcast">
      <app-banner :listImg="Broadcast"></app-banner>
    </div>
      <div class="live-type">
        <div class="live-type__item active">
          <router-link to="/live/Hot" ref="hot">
          <div class="image ">
            <img src="../assets/images/hot.png" alt="">
          </div>
            <p class="title">热门</p>
          </router-link>
        </div>
        <div class="live-type__item">
          <router-link to="/live/Music">
          <div class="image">
             <img src="@/assets/images/music.png" alt="">
          </div>
            <p class="title">音乐</p>
          </router-link>
        </div>
        <div class="live-type__item">
           <router-link to="/live/Erciyuan">
           <div class="image">
             <img src="@/assets/images/erciyuan.png" alt="">
           </div>
            <p class="title">二次元</p>
          </router-link>
        </div>
        <div class="live-type__item">
          <router-link to="/live/Emotion">
          <div class="image">
            <img src="@/assets/images/emotion.png" alt="">
          </div>
            <p class="title">情感</p>
          </router-link>
        </div>
        <div class="live-type__item">
         <router-link to="/live/Happy">
         <div class="image">
           <img src="@/assets/images/happy.png" alt="">
         </div>
            <p class="title">娱乐</p>
          </router-link>
        </div>
      </div>
      <div class="content">
        <router-view></router-view>
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
import '@/assets/style/reset.styl'

.head_Broadcast
  margin 0 auto
.live-type
  width 100%
  height 4rem
  display flex
  .live-type__item
    flex 1
    justify-content center
    padding 0.5rem
    & > a
      font-size: 18px
      color #179179
      text-decoration none
      &.active
        .title
          color: rgb(240, 20, 20)
    .image
      width 2rem
      height 2rem
      margin 0 auto
      img 
        width 2rem
        height 2rem
    .title
      text-decoration none
      margin-top 0.5rem
      width 4rem
      color #179179
      font-size 14px
      text-align center
      
</style>
