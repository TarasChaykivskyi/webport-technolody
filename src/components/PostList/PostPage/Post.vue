<template>
    <div class="page-post">
        <div class="current-post">
            <span>Post {{ post.id }}</span>
            <h2> {{ post.title}}</h2>
            <p>{{ post.body }}</p>
        </div>
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
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: "Post",
        computed: {
            ...mapGetters({
                post: 'CURRENT_POST',
                comments: 'COMMENT_POST'
            }),
            id() {
                return this.$route.params.id
            }
        },
        methods: {
            ...mapActions({
                getCurrentPost: 'GET_CURRENT_POST',
                getPostComments: 'GET_POST_COMMENTS'
            })
        },
        created() {
            this.getCurrentPost(this.id);
            this.getPostComments(this.id);
        }
    }
</script>

<style scoped>

</style>