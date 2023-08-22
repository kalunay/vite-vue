import { defineStore } from "pinia";
import { useMovieStore } from "./MovieStore";
import { ref } from "vue";

const url = "https://api.themoviedb.org/3/authentication?query=";

// OPTION API
// export const useSearchStore = defineStore('searchStore', {
//     state: () => ({
//         movies: [],
//         loader: false,
//     }),
//     actions: {
//         async getMovies(search) {
//             this.loader = true;
//             const res = await fetch(`${url}${search}`);
//             const data = res.json();
//             //console.log(data);
//             this.movies = data.results;
//             this.loader = false;
//         },

//         addToUserMovies(object){
//             const movieStore = useMovieStore();
//             movieStore.movies.push({...object, isWatched: false});
//             movieStore.activeTab = 1;
//         }
//     }
// });

// COMPOSITION API
export const useSearchStore = defineStore('searchStore', () => {
    const loader = ref(false);
    const movies = ref([]);

    const getMovies = async(search) => {
        loader.value = true;
        const res = await fetch(`${url}${search}`);
        const data = res.json();
        movies.value = data.results;
        loader.value = false;        
    }

    const addToUserMovies = (object) => {
        const movieStore = useMovieStore();
        movieStore.movies.push({...object, isWatched: false});
        movieStore.activeTab = 1;        
    }

    return {
        loader,
        movies,
        getMovies,
        addToUserMovies
    }
});