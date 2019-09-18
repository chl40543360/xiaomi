<template>
    <div class="cart">
        <BottomNav />
        <CartHeader />
        <CartLogin />
        <CartBody />
    </div>
</template>

<script>
import BottomNav from '../BottomNav'
import CartHeader from './components/CartHeader'
import CartBody from './components/CartBody'
import CartLogin from './components/CartLogin'

export default {
    data() {
        return {
            
        }
    },
    components: {
        BottomNav,
        CartHeader,
        CartBody,
        CartLogin
    }
}
</script>

<style lang="scss" scoped>
    
</style>