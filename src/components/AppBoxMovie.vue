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
    <div class="box-movie" v-for="(oneMovie, i) in store.myMovies">

        <h3>
            {{ oneMovie.title }}
        </h3>

        <br>

        <div class="box-original_title">
            <h4>Titolo originale</h4>
            <h6>
                {{ oneMovie.original_title }}
            </h6>
        </div>

        <br>

        <div class="box-original_language">
            <h5>Lingua originale</h5>
            <h6>
                {{ oneMovie.original_language }}
            </h6>
        </div>

        <br>

        <div class="box-vote">
            <h5>Voto dalla critica</h5>
            <h6>
                {{ oneMovie.vote_average }}
            </h6>
        </div>

    </div>
</template>

<!-- ------------------------------------------------------------------------------- -->

<style lang="scss" scoped>
.box-movie {
    width: calc((100% / 5) - 30px);
    margin-right: auto;
    // debug
    height: 500px;
    background-color: lightcoral;
}
</style>
