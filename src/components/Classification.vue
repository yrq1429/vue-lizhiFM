<template>
  <div class="classification">
    <!-- 一些常见的list -->
    <div class="listItem">
      <div class="item" v-for="(index, item) in listItem" :key="index">
        {{listItem[item]}}
      </div>
    </div>
    <div class="cultureList">
      <div class="head_label">
        <img src="../assets/images/listItem.png" alt="">
        文化
      </div>
      <div class="item" v-for="(index, item) in cultureList" :key="index">{{cultureList[item]}}</div>
    </div>
    <div class="messageList">
      <div class="head_label">
        <img src="../assets/images/listItem.png" alt="">
        资讯
      </div>
      <div class="item" v-for="(index, item) in messageList" :key="index">{{messageList[item]}}</div>
    </div>
    <div class="lifeList">
      <div class="head_label">
        <img src="../assets/images/listItem.png" alt="">
        生活
      </div>
      <div class="item" v-for="(index, item) in lifeList" :key="index">{{lifeList[item]}}</div>
    </div>
    <div class="languageList">
      <div class="head_label">
        <img src="../assets/images/listItem.png" alt="">
        语言
      </div>
      <div class="item" v-for="(index, item) in languageList" :key="index">{{languageList[item]}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listItem: ["音乐", "情感", "用心说", "亲子", "广播剧", "脱口秀", "二次元", "娱乐", "有声书"],
      cultureList: ["人文", "诗歌", "讲座", "历史", "语言", "教育"],
      messageList: ["体育", "汽车", "观点", "财经", "科技"],
      lifeList: ["女性", "美食", "健康", "电台", "旅行", "校园"],
      languageList: ["英语", "粤语", "日语", "方言", "小语种"]
    }
  }
}
</script>

<style lang="stylus">
.listItem 
  display flex
  width 100%
  justify-content space-around
  display flex
  flex-wrap wrap
  align-content space-between
  .item
    width 100px
    height 20px
    padding 10px 0
    align-items center
    margin-bottom 10px
    text-align center
    line-height 20px
    background-color #eee
.cultureList
  width 100%
  display flex
  flex-wrap wrap
  align-content space-between
  .head_label
    background-color #eee
    height 30px
    line-height 30px
    width 100%
    img 
      width 15px
      height 15px
  .item
    width 70px
    height 30px
    line-height 30px
    text-align center
    border-right 1px solid #eee
    margin-bottom 5px
    margin-top 5px
.messageList
  width 100%
  display flex
  flex-wrap wrap
  align-content space-between
  .head_label
    background-color #eee
    height 30px
    line-height 30px
    width 100%
    img 
      width 15px
      height 15px
  .item
    width 70px
    height 30px
    line-height 30px
    text-align center
    border-right 1px solid #eee
    margin-bottom 5px
    margin-top 5px
.lifeList
   width 100%
  display flex
  flex-wrap wrap
  align-content space-between
  .head_label
    background-color #eee
    height 30px
    line-height 30px
    width 100%
    img 
      width 15px
      height 15px
  .item
    width 70px
    height 30px
    line-height 30px
    text-align center
    border-right 1px solid #eee
    margin-bottom 5px
    margin-top 5px
.lifeList
  width 100%
  display flex
  flex-wrap wrap
  align-content space-between
  .head_label
    background-color #eee
    height 30px
    line-height 30px
    width 100%
    img 
      width 15px
      height 15px
  .item
    width 70px
    height 30px
    line-height 30px
    text-align center
    border-right 1px solid #eee
    margin-bottom 5px
    margin-top 5px
.languageList
  width 100%
  display flex
  flex-wrap wrap
  align-content space-between
  .head_label
    background-color #eee
    height 30px
    line-height 30px
    width 100%
    img 
      width 15px
      height 15px
  .item
    width 70px
    height 30px
    line-height 30px
    text-align center
    border-right 1px solid #eee
    margin-bottom 5px
    margin-top 5px
</style>
