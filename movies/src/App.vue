<script setup>
import { useMovieStore } from './stores/MovieStore';
import Movie from './components/Movie.vue';
import Search from './components/Search.vue';

const movieStore = useMovieStore();
const setTab = (id) => {
  return movieStore.setActiveTab(id);
}
</script>

<template>
  <main>
    <header class="header">
      <img src="./assets/vue.svg" class="header-logo" alt="">
      <h2>My Favorite Movies</h2>
    </header>

    <div class="tabs">
      <button :class="['btn', {btn_green: movieStore.activeTab === 1}]" @click="setTab(1)">Favorite</button>
      <button :class="['btn', {btn_green: movieStore.activeTab === 2}]" @click="setTab(2)">Search</button>
    </div>
    <div class="movies" v-if="movieStore.activeTab === 1">

      <h3>Watched Movies ({{ movieStore.watchedMovies.length }})</h3>
      <div><Movie v-for="movie of movieStore.watchedMovies" :key="movie.id" :movie="movie" /></div>

      <h3>All Movies ({{ movieStore.totalMovies }})</h3>
      <div><Movie v-for="movie of movieStore.movies" :key="movie.id" :movie="movie" /></div>
    </div>
    <div class="search" v-else>
      <h3>Search Movies ({{ movieStore.watchedMovies.length }})</h3>
      <Search />
    </div>
  </main>
</template>

<style lang="css">
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
.header-logo {
  max-width: 50px;
  margin-right: 10px;
}
.btn {
  border: none;
  width: 100px;
  height: 40px;
  font-size: 14px;
  margin: 0 10px;
  border-radius: 10px;
  cursor: pointer;
  background: #efefef;
}
.btn:hover {
  opacity: 0.7;
}
.btn_green {
  background: #37df5c;
}

.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}
</style>
