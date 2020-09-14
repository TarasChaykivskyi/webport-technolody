<template>
    <div class="page-post">
        <post-item :post="post" />
        <comments-post :comments="comments" />
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    import CommentsPost from "./CommentsPost/CommentsPost";
    import PostItem from "./PostItem/PostItem";

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
        },
        components: {
            CommentsPost,
            PostItem
        }
    }
</script>

<style scoped>

</style>