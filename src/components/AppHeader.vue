<script>
import { store } from '../store.js';

export default {
    data() {
        return {
            store
        }
    },
    methods: {

    }
}
</script>

<!-- ------------------------------------------------------------------------------- -->

<template>
    <header>
        <div class="my-container bg-dark d-flex justify-content-between align-items-center">

            <h1 class="text-danger">
                BOOLFLIX
            </h1>

            <div class="form-container">
                <form @submit.prevent="$emit('sendEvent')">
                    <input class="me-3" type="text" placeholder="Scrivi un titolo di un film" v-model="store.myString">

                    <button type="submit">Cerca</button>
                </form>
            </div>

        </div>
    </header>
</template>

<!-- ------------------------------------------------------------------------------- -->

<style lang="scss" scoped>
.my-container {
    padding: 20px;
}
</style>
