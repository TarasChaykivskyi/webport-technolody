<template>
    <router-link :to="{ name: 'Post', params: { id: post.id } }">
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
    </router-link>
</template>

<script>
    export default {
        name: "PostItem",
        props: ['post']
    }
</script>

<style scoped>

</style>