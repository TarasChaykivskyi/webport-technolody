<template>
    <header>
        <div class="header container">
            <h1 class="logo">
                <router-link :to="{name: 'PostList'}">Webport</router-link>
            </h1>
            <nav class="main-menu">
                <ul>
                    <li v-for="item in navigation" :key="item.title">
                        <router-link :to="{name: item.namePath}">
                            {{ item.title }}
                        </router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                navigation: [
                    {
                        title: 'Post',
                        namePath: 'PostList'
                    },
                    {
                        title: 'Create Post',
                        namePath: 'PostCreate'
                    },
                    {
                        title: 'All Users',
                        namePath: 'AllUsers'
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>