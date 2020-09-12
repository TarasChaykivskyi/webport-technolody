<template>
    <div class="page-posts">
        <h2>All posts</h2>

        <div class="container-posts">
            <PostItem
                    class="post"
                    v-for="post in pages"
                    :key="post.id"
                    :post="post"
            />
        </div>

        <div class="pagination">
            <div :class="{disabled: pageNumber === 1}" class="item-paginate" @click="prevPage">Prev</div>
            <div class="item-paginate"
                 v-for="item in totalPages"
                 :key="item"
                 @click="changePageNumber(item)"
                 :class="{active: pageNumber == item}"
            >
                {{ item }}
            </div>
            <div :class="{disabled: pageNumber === totalPages}" class="item-paginate" @click="nextPage">Next</div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import PostItem from "./PostListItem/PostItem";
    // import Pagination from "../Pagination/Pagination";

    export default {
        name: "PostList",
        data() {
            return {
                perPage: 10,
                pageNumber: 1,
                loadData: true
            }
        },
        computed: {
            ...mapGetters({
                posts: 'POSTS'
            }),
            totalPages() {
                return Math.ceil(this.posts.length / this.perPage)
            },
            pages() {
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
            changePageNumber(number) {
                this.pageNumber = number
            },
            prevPage() {
                if(this.pageNumber <= 1) this.pageNumber = 1;
                else this.pageNumber--;
            },
            nextPage() {
                if(this.pageNumber >= this.totalPages) this.pageNumber = this.totalPages;
                else this.pageNumber++;
            }
        },
        components: {
            PostItem,
            // Pagination
        },
        created() {
            this.$store.dispatch('GET_POST');
        }
    }
</script>

<style scoped>

</style>