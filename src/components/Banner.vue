<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(str, index) in listImg" :key="index">
              <img :src="str" />
            </div>
             <!-- <div class="swiper-slide" v-for="(str,index) in listImg" :key="index" :style="{ backgroundImage: 'url(' + str + ')' }"></div> -->
            <div class="swiper-pagination swiper-pagination-white"></div>
        </div>
        
    </div>
</template>

<script>
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.min.css';
    export default {
        props: ['listImg'],
        mounted() {
            // console.log('mounted', this)
            // https://segmentfault.com/a/1190000002962202解决划不动问题
            var swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                loop: true,
                speed: 600,
                autoplay: {
                  delay: 3000
                },
                observer:true,
                observeParents:true,
                 on: {
                  onTouchEnd: function () {
                    swiper.startAutoplay()
                  }
                }
            });
        }
    }
</script>

<style lang="stylus">
.swiper-container
  width 100%
  height 10rem
  .swiper-wrapper
    width 100%
    height 100%
  .swiper-slide
    background-position center
    background-size cover
    width 100%
    height 100%
    img 
      width 100%
      height 100%
  .swiper-pagination-bullet
    width 0.8333rem
    height 0.8333rem
    display inline-block
    background-color #7c5e53
</style>