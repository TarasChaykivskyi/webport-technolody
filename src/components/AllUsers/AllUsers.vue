<template>
    <div class="page-all-users">
        <h2>all users</h2>
        <table border="2">
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Website</th>
                <th>Info</th>
            </tr>
            <User v-for="user in users"
                  :key="user.id"
                  :user="user"
                  @showInfo="showInfo($event)"
            />
        </table>
        <Modal
                v-if="showModal"
                :company="company"
        />
    </div>
</template>

<script>
    import {mapGetters, mapActions, mapMutations} from 'vuex'
    import User from "./User/User";
    import Modal from "../Modal/Modal";

    export default {
        name: "AllUsers",
        data() {
            return {
                company: {}
            }
        },
        computed: {
            ...mapGetters({
                users: 'ALL_USERS',
                showModal: 'SHOW_MODAL'
            })
        },
        methods: {
            ...mapActions({
                getUsers: 'GET_ALL_USERS'
            }),
            ...mapMutations(['changeModal']),
            showInfo(company) {
                this.company = company;
                this.changeModal();
            }
        },
        components: {
            User,
            Modal
        },
        created() {
            this.getUsers();
        }
    }
</script>

<style scoped>

</style>