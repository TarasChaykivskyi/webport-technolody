<template>
    <tr>
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.website }}</td>
        <td class="info" @click="showInfo(user.company)">&#128269;</td>
    </tr>
</template>

<script>
    export default {
        name: "User",
        props: ['user'],
        methods: {
            showInfo(company) {
                this.$emit('showInfo', company)
            }
        }
    }
</script>

<style scoped>

</style>