<template>
  <div class="wrapper">
    <!-- <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback"> -->
    <!-- v-if 是为了防止开始的空数组导致第一个元素最后一个显示 -->
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id">
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
  props : {
    list: Array
  },
  data: function () {
    return {
      swiperOption: {
        pagination  :{
          el:'.swiper-pagination',
        },
        autoplay:{
          stopOnLastSlide: true,
        },
        loop:true,
      }
    }
  },
  computed : {
    showSwiper () {
      return this.list.length
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
