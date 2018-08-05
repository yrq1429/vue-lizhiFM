<template>
  <div class="guessLike_list">
    <div class="guessLike_list-item" v-for="(item, index) in arrayList" :key="index">
      <!-- <a :href="item.listen_url"> -->
        <div class="img">
        <img :src="item.img_url" alt="">
      </div>
      <div class="title">
        {{item.title}}
      </div>
      <!-- </a> -->
      
    </div>
  </div>
</template>

<script>
import {  getGuessLike } from '@/api/getData'
export default {
  
  props: {
    arrayList:{
      type: Array,
      default: []
    }
  }
}
</script>

<style lang="stylus">
.guessLike_list
  width 100%
  display flex
  flex-wrap wrap
  justify-content center
  align-items center
  .guessLike_list-item
    width 50%
    box-sizing border-box
    margin-bottom 10px
    img 
      width 180px
      height 140px
    .title
      width 100%
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
      font-weight bold
      padding-top 5px
</style>
