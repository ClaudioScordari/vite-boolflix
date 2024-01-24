<script>
import { store } from '../store.js';
import AppBoxMovie from "../components/AppBoxMovie.vue";

export default {
    data() {
        return {
            store
        }
    },
    methods: {

    },
    components: {
        AppBoxMovie
    }
}
</script>

<!-- ------------------------------------------------------------------------------- -->

<template>
    <main>
        <div class="all-movies d-flex flex-wrap w-100">

            <AppBoxMovie />

        </div>
    </main>
</template>

<!-- ------------------------------------------------------------------------------- -->

<style lang="scss" scoped>
main {
    height: calc(100vh - 100px);
    overflow-y: auto;
    background-color: #525659;

    .all-movies {
        padding: 30px;
        gap: 30px;
    }
}
</style>
