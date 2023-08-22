import { defineStore } from "pinia"; 
import { ref, computed, watch } from "vue";

// export const useMovieStore = defineStore("movieStore", {
//     state: () => ({
//         movies: [
//             {
//               id: 1,
//               original_title: "Spider-Man",
//               overview:
//                 "After being bitten by a genetically altered spider at Oscorp, nerdy but endearing high school student Peter Parker is endowed with amazing powers to become the superhero known as Spider-Man.",
//               poster_path: "/gh4cZbhZxyTbgxQPxD0dOudNPTn.jpg",
//               release_date: "2002-05-01",
//               isWatched: true,
//             },
//             {
//               id: 2,
//               original_title: "The Batman",
//               overview:
//                 "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
//               poster_path: "/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg",
//               release_date: "2022-03-01",
//               isWatched: false,
//             },
//         ],
//         activeTab: 2,
//     }),
//     getters: {
//         watchedMovies(){
//             return this.movies.filter((el) => el.isWatched);
//         },
//         totalMovies(){
//             return this.movies.length;
//         }
//     },
//     actions: {
//         setActiveTab(id) {
//             this.activeTab = id;
//         },
//         toggleWatched(id) {
//             const idx = this.movies.findIndex((el) => el.id === id);
//             this.movies[idx].isWatched = !this.movies[idx].isWatched;
//         },
//         deleteMovie(id) {
//             this.movies = this.movies.filter((el) => el.id !== id);
//         }
//     }
// });

export const useMovieStore = defineStore('movieStore', () => {
    const movies = ref([]);
    const activeTab = ref(2);

    const moviesOnLocalStorage = localStorage.getItem("movies");
    if(moviesOnLocalStorage){
        movies.value = JSON.parse(moviesOnLocalStorage)._value;
    }

    const watchedMovies = computed(() => {
        movies.value.filter((el) => el.isWatched);
    })

    const totalMovies = computed(() => movies.value.length);

    const setActiveTab = (id) => {
        activeTab.value = id;
    }

    const toggleWatched = (id) => {
        const idx = movies.value.findIndex((el) => el.id === id);
        movies.value[idx].isWatched = !movies.value[idx].isWatched;        
    }

    const deleteMovie = (id) => {
        movies.value = movies.value.filter((el) => el.id !== id);
    }

    watch(() => movies, (state) => {
        localStorage.setItem('movies', JSON.stringify(state));
    }, {deep: true});

    return {
        movies,
        activeTab,
        setActiveTab,
        toggleWatched,
        deleteMovie,
        watchedMovies,
        totalMovies
    }
});