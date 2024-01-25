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
            // chiamata API film
            if (store.myString.length > 0) {
                axios
                    .get(store.fullApiMovies, {
                        params: {
                            query: store.myString
                        }
                    })
                    .then(function (response) {
                        // metto la risposta in un arrey
                        store.myMovies = response.data.results;
                    });
            }
            else if (store.myString.length == 0) {
                store.myMovies = [];
            }

            /************************************************************************************************/

            // chiamata API serie tv
            if (store.myString.length > 0) {
                axios
                    .get(store.fullApiSeries, {
                        params: {
                            query: store.myString
                        }
                    })
                    .then(function (response) {
                        // metto la risposta in un arrey
                        store.mySeries = response.data.results;
                        console.log(store.mySeries);
                    });
            }
            else if (store.myString.length == 0) {
                store.mySeries = [];
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
