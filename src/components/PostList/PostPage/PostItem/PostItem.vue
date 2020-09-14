<template>
    <div class="current-post">
        <span>Post {{ post.id }}</span>
        <h2> {{ post.title}}</h2>
        <p>{{ post.body }}</p>
    </div>
</template>

<script>
    export default {
        name: "PostItem",
        props: {
            post: {
                type: Object,
                default() {
                    return {}
                }
            }
        }
    }
</script>

<style scoped>

</style>