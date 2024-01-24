import { reactive } from 'vue';

export const store = reactive({
    myMovies: [], // qui andranno i dati (provenienti anche da un API) che metteremo in un array vuoto
    fullApi: 'https://api.themoviedb.org/3/search/movie?api_key=f874144b0c9065730a470e513d997002',
    myString: '',
    allLanguage: []
});
