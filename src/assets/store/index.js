import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        posts: [],
        currentPost: {},
        commentsPost: [],
        allUsers: [],
        showModal: false,
        loadData: true
    },
    getters: {
        POSTS(state) {
            return state.posts;
        },
        CURRENT_POST(state) {
            return state.currentPost;
        },
        COMMENT_POST(state) {
            return state.commentsPost;
        },
        ALL_USERS(state) {
            return state.allUsers;
        },
        SHOW_MODAL(state) {
            return state.showModal;
        }
    },
    mutations: {
        setPosts(state, postsFromAPI) {
            if(state.loadData) {
                state.posts = postsFromAPI;
                state.loadData = false;
            }
        },
        setCurrentPost(state, id) {
            let currentPost = {};
            state.posts.map(function (item) {
                if(item.id === id) {
                    currentPost = item;
                }
            })
            state.currentPost = currentPost;
        },
        setPostComments(state, comments) {
            state.commentsPost = comments;
        },
        setAllUsers(state, users) {
            state.allUsers = users;
        },
        changeModal(state) {
            state.showModal = !state.showModal;
        },
        addNewPost(state, post) {
            state.posts.push(post);
        }
    },
    actions: {
        GET_POST({commit}) {
            return axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(response => {
                    commit('setPosts', response.data);
                }).catch(error => {
                    console.log(error);
                })
        },
        GET_CURRENT_POST({commit}, id) {
            commit('setCurrentPost', id);
        },
        GET_POST_COMMENTS({commit}, id) {
            return axios.get('https://jsonplaceholder.typicode.com/posts/' + id + '/comments')
                .then(response => {
                    commit('setPostComments', response.data);
                }).catch(error => {
                    console.log(error);
                })
        },
        GET_ALL_USERS({commit}) {
            return axios.get('https://jsonplaceholder.typicode.com/users')
                .then(response => {
                    commit('setAllUsers', response.data);
                }).catch(error => {
                    console.log(error);
                })
        },
    }
})

export default store;

