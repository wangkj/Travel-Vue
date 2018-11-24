<template>
  <div class="wrapper">
    <!-- <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback"> -->
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
      <!-- <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div> -->
      <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data: function () {
    return {
      swiperOption: {
        pagination :{
          el:'.swiper-pagination',
        },
        autoplay:{
          stopOnLastSlide: true,
        },
        loop:true,
      },
      swiperList:[{
        id: '001',
        imgUrl:'http://img1.qunarzz.com/piao/fusion/1811/4d/6706bf772c05ce02.jpg_750x200_773e75f0.jpg'
      },{
        id: '002',
        imgUrl:'http://img1.qunarzz.com/piao/fusion/1810/6e/4a5551bbb189d902.jpg_750x200_25257467.jpg'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
      background : #fff !important
  .wrapper
    // 这个wrapper设置是为了未加载时占位置，防止页面抖动
    width : 100%
    // height : 0
    // overflow : hidden
    // padding-bottom : 31.25
    height : 31.25vm
    background : #eee
    .swiper-img
      width : 100%
</style>
