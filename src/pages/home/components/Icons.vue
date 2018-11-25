<template>
  <div class="icons">
    <swiper :options="swiperOption">
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
  props: {
    list: Array
  },
  data: function () {
    return {
      swiperOption: {
        pagination  :{
          el:'.swiper-pagination',
        },
        autoplay: false,
        loop:true,
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) =>{
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
