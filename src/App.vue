<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";
import axios from "axios";
import { store } from './store.js';

export default {
    data() {
        return {
            store
        }
    },
    components: {
        AppHeader,
        AppMain,
        AppFooter
    },
    methods: {
        callApi() {
            // chiamata API
            if (store.myString.length > 0) {
                axios
                    .get(store.fullApi, {
                        params: {
                            query: store.myString
                        }
                    })
                    .then(function (response) {

                        // metto la risposta in un arrey
                        store.myMovies = response.data.results;

                        // metto tutte le lingue in un array
                        store.allLanguage = response.data.results.original_language;

                        console.log(store.allLanguage);
                        console.log(store.myMovies);
                    });
            }
            else if (store.myString.length == 0) {
                store.myMovies = [];
            }
        }
    },
    mounted() {
    }
}
</script>

<!-- ------------------------------------------------------------------------------- -->

<template>
    <div class="my-container">
        <AppHeader @sendEvent="callApi" />

        <AppMain />

        <AppFooter />
    </div>
</template>

<!-- ------------------------------------------------------------------------------- -->

<style lang="scss">
// RESET DI BOOTSTRAP
@use './assets/scss/main.scss' as *;
</style>
