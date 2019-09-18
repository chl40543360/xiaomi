<template>
    <div class="sort">
        <BottomNav />
        <SortHeader />
        <SortScroll />
    </div>
</template>

<script>
import BottomNav from '../BottomNav'
import SortHeader from './components/SortHeader'
import SortScroll from './components/SortScroll'

export default {
    data() {
        return {
            
        }
    },
    components: {
        BottomNav,
        SortHeader,
        SortScroll
    }
}
</script>

<style lang="scss" scoped>
    
</style>