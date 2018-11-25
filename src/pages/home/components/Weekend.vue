<template>
  <div>
    <div class="recommend-title">&nbsp;周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="itemx of list" :key="itemx">        
        <div class="item-img-wrapper">
          <img class="item-img" :src='itemx.imgUrl' />   
        </div>            
        <div class="item-info">
          <p class="item-title">{{itemx.title}}</p>
          <p class="item-desc">{{itemx.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .recommend-title
    margin-top : .5rem
    line-height : 2.1rem
    background : #eee
    text-intent: .6rem
  .item-img-wrapper
    overflow: hidden
    height : 0
    padding-bottom : 37.09%
    .item-img
      width: 100%
  .item-info
    flex: 1
    padding: .3rem
    min-width : 0
    .item-title
      line-height: 1.6rem
      font-size: 1rem
      ellipsis()
    .item-desc
      line-height: 1.2rem
      color: #bbb
      font-size: .8rem
      ellipsis()
</style>
