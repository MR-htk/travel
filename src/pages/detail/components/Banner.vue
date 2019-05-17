<template>
  <div class="banner">
    <img class="banner-img"
         src="//img1.qunarzz.com/sight/p0/1612/1d/1d9a740c1f9e0efaa3.img.jpg_600x330_3b0fdac5.jpg" />
    <div class="banner-info">
      <div class="banner-tittle">成都海昌极地海洋公园</div>
      <div class="banner-number"><span class="iconfont banner-icon">&#xe604;</span> 54</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBanner',
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>
.banner
  position relative
  overflow hidden
  height 0
  padding-bottom 55%
  .banner-img
    width 100%
  .banner-info
    display flex
    position absolute
    left 0
    right 0
    bottom 0
    line-height 0.6rem
    color #ffffff
    background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
    .banner-tittle
      flex 1
      font-size 0.32rem
      padding 0 0.2rem
    .banner-number
      padding 0 0.4rem
      line-height 0.32rem
      height 0.32rem
      margin-top 0.14rem
      border-radius 0.2rem
      background rgba(0, 0, 0, 0.8)
      font-size 0.24rem
      .banner-icon
        font-size 0.24rem
</style>
