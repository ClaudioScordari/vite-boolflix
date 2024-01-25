<script>
import { store } from '../store.js';

export default {
    data() {
        return {
            store
        }
    },
    methods: {
        getFlag(language) {

            let flag = 'https://flagicons.lipis.dev/flags/4x3/';

            if (language == 'en') {
                return flag += 'gb.svg';
            } else if (language == 'ja') {
                return flag += 'jp.svg';
            } else if (language == 'ko') {
                return flag += 'kr.svg';
            }
            return flag + language + '.svg';
        }
    },
    props: {
        title_name: String,
        origin_title_name: String,
        origin_lang: String,
        voteAverage: Number
    }
}
</script>

<!-- ------------------------------------------------------------------------------- -->

<template>
    <div class="box-movie-series">
        <h3>
            {{ title_name }}
        </h3>

        <br>

        <div class="box-original_title">
            <h4>Titolo originale</h4>
            <h6>
                {{ origin_title_name }}
            </h6>
        </div>

        <br>

        <div class="box-original_language">
            <h5>Lingua originale</h5>

            <span class="fw-bold">{{ origin_lang }}</span>

            <span class="flag-lang">
                <img class="w-100" :src="getFlag(origin_lang)" alt="">
            </span>
        </div>

        <br>

        <div class="box-vote">
            <h5>Voto dalla critica</h5>
            <h6>
                {{ voteAverage }}
            </h6>
        </div>
    </div>
</template>

<!-- ------------------------------------------------------------------------------- -->

<style lang="scss" scoped>
.box-movie-series {
    width: calc((100% / 5) - 30px);
    margin-right: auto;
    margin-left: auto;
    padding: 15px;
    // debug
    min-height: 500px;
    background-color: lightcoral;

    .flag-lang {
        margin-left: 10px;
        display: inline-block;
        width: 40px;
    }
}
</style>
