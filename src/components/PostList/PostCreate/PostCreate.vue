<template>
    <div class="page-add-post">
        <h2>Add new post</h2>
        <form @submit.prevent>
            <div>
                <label for="title">Title: </label>
                <textarea id="title" v-model="titlePost"></textarea>
            </div>
            <div>
                <label for="body">Body: </label>
                <textarea class="add-post-body" v-model="bodyPost" id="body"></textarea>
            </div>
            <span class="error">{{ error }}</span>
            <button @click="createNewPost">Add post</button>
        </form>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from 'vuex'

    export default {
        name: "PostCreate",
        data() {
            return {
                titlePost: '',
                bodyPost: '',
                error: ''
            }
        },
        computed: {
            ...mapGetters({
                posts: 'POSTS'
            }),
            idPost() {
                return this.posts.length + 1;
            }
        },
        methods: {
            ...mapMutations({
                addNewPost: 'addNewPost'
            }),
            createNewPost() {
                if(this.validateForm()) {
                    this.addNewPost({
                        id: this.idPost,
                        title: this.titlePost,
                        body: this.bodyPost,
                        userId: 11
                    });

                    this.titlePost = this.bodyPost = '';
                }


            },
            validateForm() {
                if(this.bodyPost.trim() && this.titlePost.trim() !== '') {
                    this.error = '';
                    return true;
                }else {
                    this.error = 'Please fill all field!!!';
                    return false;
                }
            }
        }
    }
</script>

<style scoped>

</style>