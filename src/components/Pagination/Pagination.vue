<template>
    <div class="pagination">
        <div :class="{disabled: pageNumber === 1}" class="item-paginate" @click="prevPage">&lt;</div>
        <div class="item-paginate" v-if="hasFirst()" @click="changePageNumber(1)">1</div>
        <div class="item-paginate dots" v-if="hasFirst()">...</div>
        <div class="item-paginate"
             v-for="item in currentPages"
             :key="item"
             @click="changePageNumber(item)"
             :class="{active: pageNumber == item}"
        >
            {{ item }}
        </div>
        <div class="item-paginate dots" v-if="hasLast()">...</div>
        <div class="item-paginate" v-if="hasLast()" @click="changePageNumber(totalPages)">{{ totalPages }}</div>
        <div :class="{disabled: pageNumber === totalPages}" class="item-paginate" @click="nextPage">&gt;</div>
    </div>
</template>

<script>
    export default {
        name: "Pagination",
        data() {
            return {
                perPage: 10,
                pageNumber: 1,
                pageRange: 2
            }
        },
        props: {
            posts: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        computed: {
            totalPages() {
                return Math.ceil(this.posts.length / this.perPage)
            },
            currentPages() {
                let pages = [];
                let start = this.pageNumber - this.pageRange;
                start = (start > 0) ? start : 1;
                let end = this.pageNumber + this.pageRange
                end = (end < this.totalPages) ? end : this.totalPages

                for(let i = start; i <= end; i++) {
                    pages.push(i)
                }
                return pages
            }
        },
        methods: {
            changePageNumber(number) {
                this.pageNumber = number;
                this.$emit('current-page', number)
            },
            prevPage() {
                if(this.pageNumber <= 1) this.changePageNumber(1);
                else this.changePageNumber(--this.pageNumber);
            },
            nextPage() {
                if(this.pageNumber >= this.totalPages) this.changePageNumber(this.totalPages);
                else this.changePageNumber(++this.pageNumber);
            },
            hasFirst: function() {
                let start = this.pageNumber - this.pageRange;
                start = (start > 0) ? start : 1;
                return start !== 1
            },
            hasLast: function() {
                let end = this.pageNumber + this.pageRange
                end = (end < this.totalPages) ? end : this.totalPages
                return end < this.totalPages
            }
        }
    }
</script>

<style scoped>

</style>