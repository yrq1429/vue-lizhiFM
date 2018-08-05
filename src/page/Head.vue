<template>
<div class="header">
<div class="header-nav">
      <div class="table-item hasImg">
        <router-link to="/classification">
          <img src="../assets/images/list.png" alt="">
        </router-link>
      </div>
      <div class="table-item">
        <router-link to="/live/Hot">直播</router-link>
      </div>
      <div class="table-item">
        <router-link to="/voice">声音</router-link>
      </div>
      <div class="table-item">
        <router-link to="/found">发现</router-link>
      </div>
      <div class="table-item">
        <router-link to="/follow">关注</router-link>
      </div>
      <div class="table-item hasImg">
          <img src="../assets/images/person.png" alt="">
      </div>
   </div>
   <div class="header-search">
     <!-- <p class="content"> -->
       周末优选
     <!-- </p> -->
     
    </div>
    <div class="view">
    <router-view></router-view>
    </div>
</div>
</template>

<script>
export default {
components: {
  
},
data () {
  return {
  }
},
methods: {
  
}
}
</script>

<style lang="stylus">
.header-nav
  display flex
  width 100%
  padding-top 10px
  .table-item
    flex: 1
    padding 10px
    text-align: center
    & > a
      font-size: 18px
      color #179179
      text-decoration none
      &.active
        color: rgb(240, 20, 20)
  .hasImg
    margin-top -3px
    img 
      width 24px
      height 24px
.header-search
  width 95%
  height 30px
  border 1px solid #179179
  margin 0 auto
  // background-color #179179
  opacity .5
  border-radius 5px
  display flex
  color #179
  margin-bottom 10px
//   .content
//     justify-content center 
//     align-items center
</style>
