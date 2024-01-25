import { reactive } from 'vue';

export const store = reactive({
    mySeries: [],
    myMovies: [],
    fullApiMovies: 'https://api.themoviedb.org/3/search/movie?api_key=f874144b0c9065730a470e513d997002',
    fullApiSeries: 'https://api.themoviedb.org/3/search/tv?api_key=f874144b0c9065730a470e513d997002',
    myString: ''
});