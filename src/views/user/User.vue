<template>
    <div class="user">
        <BottomNav />
        <UserHeader />
        <UserBody />
        <router-view></router-view>
    </div>
</template>

<script>
import BottomNav from '../BottomNav'
import UserHeader from './components/UserHeader'
import UserBody from './components/UserBody'

export default {
    data() {
        return {
            
        }
    },
    components: {
        BottomNav,
        UserHeader,
        UserBody
    }
}
</script>

<style lang="scss" scoped>
    
</style>