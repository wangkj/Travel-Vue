<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item">
          <div class="icon-img">
            <img class="icon-img-content" :src='item.imgUrl'/>
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide> 
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return{
      iconList:[{
        id:'001',
        imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc:'景点门票xxxxxxxxxx'
      },
      {
        id:'002',
        imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
        desc:'北京必游'
      },
      {
        id:'003',
        imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
        desc:'一日游'
      },
      {
        id:'004',
        imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
        desc:'文化古迹'
      },
      {
        id:'005',
        imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
        desc:'动植物园'
      },
      {
        id:'006',
        imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
        desc:'打卡圣地'
      },
      {
        id:'007',
        imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png',
        desc:'野生动物园'
      },
      {
        id:'008',
        imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
        desc:'泡温泉'
      },
      {
        id:'009',
        imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
        desc:'故宫'
      },
      {
        id:'010',
        imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png',
        desc:'全部玩乐'
      }],
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) =>{
        const page = Math.floor(index/8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container
    height : 0
    padding-bottom : 50%
  .icons
    overflow : hidden
    height : 0
    padding-bottom : 50%
    .icon
      height : 0
      position : relative
      overflow : hidden
      float : left
      width : 25%
      padding-bottom : 25%
      .icon-img
        position: absolute
        top:0
        left:0
        right:0
        bottom 1.375rem
        box-sizing : border-box
        padding : .2rem
        .icon-img-content
          height : 100%
          display : block
          margin: 0 auto
          margin-top : .1rem
      .icon-desc
        position : absolute
        left:0
        right:0
        bottom:0
        height: 1.375rem
        line-height : 1.375rem
        color : $darkTextColor
        text-align : center
        ellipsis()
</style>
