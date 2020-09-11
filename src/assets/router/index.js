import Vue from 'vue';
import VueRouter from 'vue-router';
import PostList from '../../components/PostList/PostList'
import Post from '../../components/PostList/Post/Post'
import PostCreate from '../../components/PostList/PostCreate/PostCreate'
import AllUsers from "../../components/AllUsers/AllUsers";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: {name: 'PostList'}
    },
    {
        path: '/post',
        name: 'PostList',
        component: PostList
    },
    {
        path: '/post/:id',
        name: 'Post',
        component: Post
    },
    {
        path: '/post/create',
        name: 'PostCreate',
        component: PostCreate
    },
    {
        path: '/users',
        name: 'AllUsers',
        component: AllUsers
    },
    {
        path: '*',
        redirect: {name: 'PostList'}
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router;