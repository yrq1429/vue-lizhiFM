<template>
  <div id="app">
    <div class="header-nav">
      <div class="table-item hasImg">
        <router-link to="/classification">
          <img src="./assets/images/list.png" alt="">
        </router-link>
      </div>
      <div class="table-item">
        <router-link to="/live">直播</router-link>
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
        <router-link to="/homepage">
          <img src="./assets/images/person.png" alt="">
        </router-link>
      </div>
      <div class="header-search">
        
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      
    }
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
</style>

