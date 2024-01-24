<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";
import axios from "axios";
import { store } from './store.js';

export default {
    data(){
        return {
            store // in questo caso il nome della chiave, e il nome del valore della chiave coincidono... quindi si può lasciare store
        }
    },
    components: {
        AppHeader,
        AppMain,
        AppFooter
    },
    methods: {},
    mounted(){
        axios
            .get('url')
            .then((response) => {

            });
    }
}
</script>

<!-- ------------------------------------------------------------------------------- -->

<template>

    <AppHeader/>

    <AppMain/>

    <AppFooter/>

</template>

<!-- ------------------------------------------------------------------------------- -->

<style lang="scss">
// RESET DI BOOTSTRAP
@use './assets/scss/main.scss' as *;
</style>
