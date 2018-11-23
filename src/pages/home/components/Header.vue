<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      城市
      <span class="iconfont arrow-icon">&#xe6aa;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="stylus" scoped>
  // 1rem = html font-size = 16px
  // 86/100
  @import '~styles/varibles.styl'
  .header
    line-height : 2.6875rem
    display : flex
    background : $bgColor
    color : #fff
    .header-left
      width : 2rem
      float : left
      .back-icon
        text-align : center
        font-size : 1.25rem
    .header-input
      flex : 1
      margin-top : 0.375rem
      height : 2rem
      line-height : 1.9rem
      margin-left : 0.625rem
      padding-left : 0.6rem
      background : #fff
      border-radius : .3125rem
      color : #ccc
      font-size : 0.9rem
    .header-right
      width : 3.875rem
      float : right
      text-align : center
      font-size : 0.9rem
      .arrow-icon
        margin-left : -0.1rem
</style>
