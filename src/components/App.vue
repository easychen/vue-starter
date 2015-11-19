<template>
  <div id="wrapper">
    <!-- header -->
    <div id="header">
      <div class="container"><h2 class="logo hidden-xs">Vue starter</h2>
     
      <ul class="vsnav" >
        <li class="nav-item"><a href="#/">首页</a></li>
        <li class="nav-item"><a href="#/page1">Page1</a></li>
        <li class="nav-item"><a href="#/page2">Page2</a></li>
      </ul>
      </div>
    </div>
    <!-- main view -->
    <router-view
      class="view"
      keep-alive
      transition
      transition-mode="out-in">
    </router-view>
    <!-- <bar /> -->
  </div>
</template>

<script>
//import foobar from './foobar.vue';

export default {

  name: 'App',
  // components: {
  //   'foo':foobar
  // },
  // events: {
  //   'user-login': function(){
  //     this.islogin = true;
  //   }
  // },
  // methods:
  // {
  //   signout:function()
  //   {
  //     this.islogin = false;
  //   }
  // },
  data () {
    return {
      islogin: false
    }
  }
}
</script>

<style lang="stylus">
@import "../variables.styl"

html, body
  font-family "Helvetica Neue" Helvetica "Hiragino Sans GB" "STHeitiSC-Light" "Microsoft YaHei" "微软雅黑" Arial sans-serif
  font-size 13px
  height 100%
  padding 0px
  margin 0px

h1,h2,h3,h4
  font-weight normal!important

.container
  max-width 900px
  margin-left auto
  margin-right auto
  position relative


.vsnav
  margin 0px
  position absolute
  right 0px
  top 20px
  a
    text-decoration none
    color $mainlink
    &:hover
        transition color 0.5s ease
        color $dark
  >li
    display inline
    margin-left 20px
    font-size 16px

.cwarpper
  background $mainbg
  min-height 300px

.top5
  margin-top 5px

.top20
  margin-top 20px  

.in5
  padding 5px

.in25
  padding 25px    

.vspage
  h2
    color $gray
    margin-top 20px
    font-size $subtitle
  .wpage
    margin-top 20px
    background white
    padding 40px
    min-height 400px    

 

.pink
  color $mainlink



</style>
