<template>
    <div>
        <headerVue />
        <BlogDetails />
        <footerVue />
    </div>
</template>

<script>
import headerVue from '@/components/headerVue.vue'
import BlogDetails from '@/components/BlogDetails.vue'
import footerVue from '@/components/footerVue.vue'
export default {
    name: 'blogdetailspage',
    components: { headerVue, BlogDetails, footerVue }
}
</script>

<style lang="scss" scoped></style>
<style lang="scss" scoped>
</style>