<template>
    <div class="page-posts">
        <h2>All posts</h2>
        <div class="container-posts">
            <PostItem
                    class="post"
                    v-for="post in currentPosts"
                    :key="post.id"
                    :post="post"
            />
        </div>
        <Pagination :posts="posts"
                    @current-page="changePage($event)"
        />
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import PostItem from "./PostListItem/PostItem";
    import Pagination from "../Pagination/Pagination";

    export default {
        name: "PostList",
        data() {
            return {
                pageNumber: 1,
                perPage: 10,
                loadData: true,
            }
        },
        computed: {
            ...mapGetters({
                posts: 'POSTS'
            }),
            currentPosts() {
                let posts = [],
                    start = Number,
                    end = Number;
                if(this.pageNumber === 1) {
                    start = 0;
                }else {
                    start = (this.pageNumber - 1) * this.perPage;
                }
                end = start + this.perPage;
                this.posts.map(function (item, index) {
                    if(index < end && index >= start) {
                        posts.push(item);
                    }
                })
                return posts;
            }
        },
        methods: {
            changePage(current) {
                this.pageNumber = current;
            }
        },
        components: {
            PostItem,
            Pagination
        },
        created() {
            this.$store.dispatch('GET_POST');
        }
    }
</script>

<style scoped>

</style>