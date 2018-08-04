<template>
  <div class="hotList">
    <div class="hotList_item" v-for="(item, index) in sumHotData" :key="index">
      <div class="imgInfo">
        <img :src="item.img_url" alt="">
        <div class="listen_peop">
          <img class="listen_peop_icon"  src="../assets/images/listen_peop.png" alt="">
          <div class="peop">{{item.listen_peop}}人</div>
        </div>
      </div>
      <div class="title">{{item.title}}</div>
      <div class="author">{{item.auth}}</div>
    </div>
  </div>
</template>

<script>
// import {  getHotLive } from '@/api/getData'
export default {
  props: {
    sumHotData: {
      type: Array,
      default: []
    }
  }

}
</script>

<style lang="stylus">
.hotList
  margin-top 20px 
  display flex
  flex-wrap: wrap;
  justify-content: center;
  align-items center
.hotList_item
  width 190px
  height 250px
  margin 0 5px
  margin-bottom 30px
  box-sizing border-box
  border-radius 15px
  .imgInfo
    position relative
    img 
      width 100%
    .listen_peop
      .listen_peop_icon
        width 20px
        height 20px
        position absolute
        left 0
        bottom 15px
      .peop
        position absolute
        left 20px
        bottom 15px
  .title
    width 100%
    overflow hidden
    text-overflow ellipsis
    white-space nowrap
    font-weight bold
    padding-top 5px
  .author
    font-size 14px
    color #179179
</style>
