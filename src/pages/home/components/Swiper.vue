<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList"
                    :key="item.id">
        <img class="swiper-ima"
             :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination"
           slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/437a486a1627adae39ab30e4d98fbcee.jpg_750x200_d8477149.jpg'
      },
      {
        id: '0002',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/dc11f0bb94057224b104a2017f313e21.jpg_750x200_feee379d.jpg'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background #ffffff !important
.wrapper
  overflow hidden
  width 100%
  // height 26.67vw
  height 0
  padding-bottom 26.67%
  background #eeeeee
  .swiper-ima
    width 100%
</style>
