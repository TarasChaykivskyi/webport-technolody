<template>
    <div class="modal-window">
        <div class="overlay"
             @click.self="changeModal"
        >
            <div class="modal">
                <div class="header-modal">
                    <h2>Information</h2>
                </div>
                <table class="body-modal">
                    <tr>
                        <td>Name Company: </td>
                        <td>{{ company.name }}</td>
                    </tr>
                    <tr>
                        <td>BS Company: </td>
                        <td>{{ company.bs }}</td>
                    </tr>
                    <tr>
                        <td>Phrase Company: </td>
                        <td>{{ company.catchPhrase }}</td>
                    </tr>
                </table>
                <button class="close"
                        @click="changeModal"
                >
                    &times;
                </button>
            </div>
        </div>
    </div>
</template>

    <script>

    import {mapMutations} from 'vuex';

    export default {
        name: "Modal",
        props: ['company'],
        methods: {
            ...mapMutations(['changeModal'])
        }
    }
</script>

<style scoped>

</style>