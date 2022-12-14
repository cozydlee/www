<template>
  <div id="app">
    <HeaderArea />
    <router-view></router-view>
    <FooterArea />
  </div>
</template>

<style>
@import url(//fonts.googleapis.com/earlyaccess/jejugothic.css);

/*
 css reset
*/

body{font-size: 16px; color: #333;}
a{color: #333; text-decoration: none;}
#app {
  font-family: 'Jeju Gothic', sans-serif;
  text-align: center;
  color: #2c3e50;
}
   .head{color: red;}
   .rimg{width: 90%; margin: 15px auto;}
   h4{font-size: 24px;margin: 15px 0;}
   p{font-size: 18px; margin: 15px 0;}

html, body, div , span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video{margin: 0; padding: 0; border: 0; font-size: 100%;}
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section{display: block;}
body{font-family: 'Jeju Gothic', sans-serif; font-size: 16px;color: #333}
li, ol, ul{list-style: none;}
table{border-collapse: collapse; border-spacing: 0;}
address{font-style: normal}
a{color: #333; text-decoration: none}
img{border: 0; vertical-align: top}
.hidden{display: block; position: absolute;
    left: -1000%; width: 1px; height: 1px;
    overflow: hidden; color: #fff;}

h2{font-size: 3rem; color: #f0f0f0; letter-spacing: 10px;}

</style>

<script>
import HeaderArea from './components/HeaderArea.vue'
import FooterArea from './components/FooterArea.vue'


 export default {
  name : 'app',
  methods: {
  append: function(){
    this.cnt++;
  }
  },
  components:{
      HeaderArea,
       FooterArea
  }
  }

</script>