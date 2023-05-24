<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
import VueHead from 'vue-head'

Vue.use(VueHead)
export default {
  name: 'App',
  head: {
    meta: [
      { name: 'description', content: '에어비앤비 클론사이트' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1.0,user-scalable=no' },
      { charset: 'utf-8' },
      { property: 'og:type', content: 'website' }
    ],
    link: [
      {rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/xeicon@2.3.3/xeicon.min.css'}
      // {rel: 'stylesheet', herf: 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.1/tiny-slider.css'}
      // {rel: 'stylesheet', href: 'https://unpkg.com/vue-slick-carousel'}
    ]
  }
}
</script>

<style>
@import "./assets/reset.css";
@import "./assets/mainHeader.css";
@import "./assets/category.css";
@import "./assets/mainFooter.css";
@import "./assets/itemList.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
