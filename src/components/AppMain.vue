<script>
import { store } from '../store.js';
import AppOneElem from "../components/AppOneElem.vue";

export default {
    data() {
        return {
            store
        }
    },
    methods: {
        getVote(vote) {
            let finalVote = 0;
            return finalVote = Math.floor(vote) % 5 + 1;
        }
    },
    components: {
        AppOneElem
    }
}
</script>

<!-- ------------------------------------------------------------------------------- -->

<template>
    <main>

        <h1 v-if="store.myMovies.length > 0" class="ms-4 my-4">
            Film
        </h1>

        <h1 v-else="" class="ms-4 mt-3">
            Cerca un film o una serie
        </h1>

        <div class="all-movies d-flex">
            <AppOneElem v-for="(oneMovie, i) in store.myMovies" :key="i" :title_name="oneMovie.title"
                :origin_lang="oneMovie.original_language" :origin_title_name="oneMovie.original_title"
                :voteAverage="getVote(oneMovie.vote_average)" :url_image="oneMovie.poster_path" />
        </div>

        <hr> <!-- ---------------------------------------------------------------------------------------- -->

        <h1 v-if="store.mySeries.length > 0" class="ms-4 my-4">
            Serie Tv
        </h1>

        <div class="all-series d-flex">
            <AppOneElem v-for="(oneSerie, i) in store.mySeries" :key="i" :title_name="oneSerie.name"
                :origin_lang="oneSerie.original_language" :origin_title_name="oneSerie.original_name"
                :voteAverage="getVote(oneSerie.vote_average)" :url_image="oneSerie.poster_path" />
        </div>

    </main>
</template>

<!-- ------------------------------------------------------------------------------- -->

<style lang="scss" scoped>
main {
    height: calc(100vh - 100px);
    overflow-y: auto;
    background-color: #525659;

    .all-movies,
    .all-series {
        height: 450px;
        overflow-x: auto;
    }

    hr {
        border: 2px solid grey;
    }
}
</style>
