---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: Vue Bootstrap Autocomplete
  text: A simple autocomplete component for Vue 3 using Bootstrap 4
  actions:
    - theme: brand
      text: Get Started
      link: /guide/gettingStarted

features:
  - title: bootstrap-vue compatible
    details: Works with the popular bootstrap-vue bootstrap wrapper.
  - title: Configurable
    details: Can be configured for many different use cases
  - title: Works well with JSON API's
    details: Easy to integrate with any JSON based API's
---

<script setup>
  import HomePageDemo from './.vitepress/components/HomePageDemo.vue'
</script>


<div class="container">
  <h2>Try It Out</h2>

  <HomePageDemo class='homepage-demo'/>
</div>

<style lang='scss'>
  .app .home{
    padding-top: 0px;
  }
  .homepage-demo{
    min-height: 400px
  }
</style>
