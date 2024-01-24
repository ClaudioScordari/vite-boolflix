<script>
import { store } from '../store.js';

export default {
    data() {
        return {
            store
        }
    },
    methods: {
        getFlag(movie) {
            if (movie.original_language == 'en') {
                return 'https://www.bandiere-mondo.it/data/flags/h80/gb-eng.webp'
            }
        }
    }
}
</script>

<!-- ------------------------------------------------------------------------------- -->

<template>
    <div class="box-movie" v-for="(oneMovie, i) in store.myMovies" :key="i">

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

            <div class="flag-lang">
                <img class="w-100" :src="getFlag(oneMovie)" alt="">
            </div>
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
    margin-left: auto;
    padding: 15px;
    // debug
    height: 500px;
    background-color: lightcoral;

    .flag-lang {
        width: 40px;
    }
}
</style>
