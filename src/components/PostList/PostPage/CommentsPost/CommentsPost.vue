<template>
    <div v-if="comments.length" class="container-comments">
        <h2>Comments</h2>
        <div class="comment" v-for="comment in comments" :key="comment.id">
            <div class="comment-user">
                <span><span>Name:</span> {{ comment.name }}</span>
                <span><span>Email:</span> {{ comment.email }}</span>
            </div>
            <div class="comment-description">
                <p>{{ comment.body }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CommentsPost",
        props: {
            comments: {
                type: Array,
                default() {
                    return [];
                }
            }
        }
    }
</script>

<style scoped>

</style>