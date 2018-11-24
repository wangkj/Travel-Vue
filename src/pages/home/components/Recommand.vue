<template>
  <div>
    <div class="recommend-title">&nbsp;热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="itemx of recommendList" :key="itemx">        
        <img class="item-img" :src='itemx.imgUrl' />        
        <div class="item-info">
          <p class="item-title">{{itemx.title}}</p>
          <p class="item-desc">{{itemx.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommand',
  data () {
    return {
      recommendList: [{
        id: '001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_200x200_2458ffb2.jpg',
        title: '八达岭长城01',
        desc: '不到长城非好汉xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
      },
      {
        id: '002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_200x200_2458ffb2.jpg',
        title: '八达岭长城02',
        desc: '不到长城非好汉xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
      },
      {
        id: '003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_200x200_2458ffb2.jpg',
        title: '八达岭长城03',
        desc: '不到长城非好汉xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
      },
      {
        id: '004',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_200x200_2458ffb2.jpg',
        title: '八达岭长城04',
        desc: '不到长城非好汉xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
      }]
    }   
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
  .item
    display: flex
    overflow : hidden
    height : 5.9rem
    .item-img
      width: 5.4rem
      height : 5.4rem
      padding : .3rem
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
      .item-button
        line-height : 1.4rem
        background: #ff9300
        padding : 0 .6rem
        border-radius: .18rem
        margin-top: .4rem
        color: #fff
</style>
