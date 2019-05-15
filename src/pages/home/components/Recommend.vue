<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom"
          v-for="item of recommentList"
          :key="item.id">
        <img class="img-item"
             :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRemmend',
  data () {
    return {
      recommentList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1612/1d/1d9a740c1f9e0efaa3.img.jpg_200x200_63285bd9.jpg',
        title: '成都海昌极地海洋公园',
        desc: '【提前1天预订】成都海昌极地海洋公园一期二期+冰雪乐园套票'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1612/1d/1d9a740c1f9e0efaa3.img.jpg_200x200_63285bd9.jpg',
        title: '成都海昌极地海洋公园',
        desc: '【提前1天预订】成都海昌极地海洋公园一期二期+冰雪乐园套票'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1612/1d/1d9a740c1f9e0efaa3.img.jpg_200x200_63285bd9.jpg',
        title: '成都海昌极地海洋公园',
        desc: '【提前1天预订】成都海昌极地海洋公园一期二期+冰雪乐园套票'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1612/1d/1d9a740c1f9e0efaa3.img.jpg_200x200_63285bd9.jpg',
        title: '成都海昌极地海洋公园',
        desc: '【提前1天预订】成都海昌极地海洋公园一期二期+冰雪乐园套票'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.title
  margin-top 0.2rem
  line-height 0.8rem
  background #eeeeee
  text-indent 0.2rem
.item
  overflow hidden
  display flex
  height 1.9rem
  .img-item
    width 1.7rem
    height 1.7rem
    padding 0.1rem
  .item-info
    flex 1
    padding 0.1rem
    min-width 0
    .item-title
      line-height 0.54rem
      font-size 0.32rem
      ellipsis()
    .item-desc
      line-height 0.4rem
      color #cccccc
      ellipsis()
    .item-button
      line-height 0.44rem
      margin-top 0.16rem
      background #ff9300
      padding 0 0.2rem
      border-radius 0.06rem
      color #ffffff
</style>
