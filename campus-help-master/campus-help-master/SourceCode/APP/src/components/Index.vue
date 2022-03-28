<template>
	<div>
        <Nav></Nav>
        <Footer></Footer>
    </div>
</template>

<script>
import Nav from './Nav.vue'
import Footer from './Footer.vue'
export default {
	name: 'Index',
    components:{
        Nav,Footer
    }
}
</script>

<style lang="scss" scoped></style>
