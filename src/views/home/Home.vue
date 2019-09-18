<template>
  <div class="home">
    <HomeHeadSearch />
    <HomeNavBar />
    <BottomNav />
  </div>
</template>

<script>
import HomeHeadSearch from './homebody/HomeHeadSearch'
import HomeNavBar from './homebody/HomeNavBar'
import BottomNav from '../BottomNav'

export default {
  name: 'home',
  components: {
    HomeHeadSearch,
    HomeNavBar,
    BottomNav
  }
}
</script>

<style lang="scss" scoped>
  .home {
    
  }
</style>
