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
        },
        voteToStars(index) {
            while (!(this.voteAverage <= index)) {
                return 'yellow-stars'
            }
        }
    },
    props: {
        title_name: String,
        origin_title_name: String,
        origin_lang: String,
        voteAverage: Number,
        url_image: String
    }
}
</script>

<!-- ------------------------------------------------------------------------------- -->

<template>
    <div class="box-movie-series">

        <img class="main-img h-100" :src="store.urlImg + url_image" alt="">

        <div class="info">

            <h3>
                {{ title_name }}
            </h3>

            <br>

            <div class="box-original_title">
                <h4>
                    Titolo originale
                </h4>

                <h6>
                    {{ origin_title_name }}
                </h6>
            </div>

            <br>

            <div class="box-original_language">
                <h5>Lingua originale</h5>

                <span class="fw-bold">
                    {{ origin_lang }}
                </span>

                <span class="flag-lang">
                    <img class="w-100" :src="getFlag(origin_lang)" alt="">
                </span>
            </div>

            <br>

            <div class="box-vote">
                <h5>
                    Voto dalla critica
                </h5>

                <span class="stars-vote">
                    {{ voteAverage }}
                    <i class="fa-solid fa-star white-stars" :class="voteToStars(i)" v-for="(star, i) in 5"></i>
                </span>
            </div>

        </div>

    </div>
</template>

<!-- ------------------------------------------------------------------------------- -->

<style lang="scss" scoped>
.box-movie-series {
    width: 342px;
    height: 450px;
    position: relative;
    margin-right: 20px;

    &:last-child {
        margin-right: 0;
    }

    .info {
        padding: 10px;
        max-width: 300px;
        color: white;
        position: absolute;
        top: 0px;
        left: 0px;
        display: none;
    }

    &:hover {
        img.main-img {
            filter: brightness(0.3);
        }

        .info {
            display: block;
        }
    }

    .flag-lang {
        margin-left: 10px;
        display: inline-block;
        width: 40px;
    }

    .white-stars {
        color: white;
    }

    .yellow-stars {
        color: yellow;
    }

}
</style>
