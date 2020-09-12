<template>
    <div class="pagination">
        <div class="item-paginate">Prev</div>
        <div class="item-paginate"
             v-for="item in totalPages"
             :key="item"
             @click="changePageNumber(item)"
        >
            {{ item }}
        </div>
        <div class="item-paginate">Next</div>
    </div>
</template>

<script>
    export default {
        name: "Pagination",
        props: {
            perPage: {
                type: Number,
                default: 10
            },
            pageNumber: {
                type: Number,
                default: 1
            },
            obj: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        computed: {
            totalPages() {
                return Math.ceil(this.obj.length / this.perPage)
            },
            pages() {
                let obj = [],
                    start = Number,
                    end = Number;

                if(this.pageNumber === 1) {
                    start = 0;
                }else {
                    start = (this.pageNumber - 1) * this.perPage;
                }
                end = start + this.perPage;

                this.obj.map(function (item, index) {
                    if(index < end && index >= start) {
                        obj.push(item);
                    }
                })
                return obj;
            }
        },
        methods: {
            changePageNumber(number) {
                this.pageNumber = number;
                console.log(number)
                // this.$emit('currentPost', this.pages)
            }
        }
    }
</script>

<style scoped>

</style>