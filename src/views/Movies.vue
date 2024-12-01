<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { Movie } from "../types/movie";
import { getMovies } from "../api/movieService";

export default defineComponent({
  name: "Movies",
  // setup() {
  //   const movies = ref<Movie[]>([]);

  //   const fetchMovies = async () => {
  //     try {
  //       const fetchedMovies = await getMovies();
  //       if (fetchedMovies && Array.isArray(fetchedMovies)) {
  //         movies.value = fetchedMovies;
  //         // fetchedMovies.forEach((movie) => {
  //         //   console.log(`Movie: ${movie.title}, Poster URL: ${movie.poster}`);
  //         // });
  //       } else {
  //         console.error("No movies found.");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching movies:", error);
  //     }
  //   };

  //   onMounted(fetchMovies);

  //   return {
  //     movies,
  //   };
  // },
  data() {
    return {
      movies: [] as Movie[],
    };
  },
  async mounted() {
    try {
      const fetchedMovies = await getMovies();
      if (Array.isArray(fetchedMovies)) {
        this.movies = fetchedMovies;
        fetchedMovies.forEach((movie) => {
          console.log(`Movie: ${movie.title}, Poster URL: ${movie.poster}`);
        });
      } else {
        console.log("No movies found");
      }
    } catch (error) {
      console.log("Error fetching movies:", error);
    }
  },
});
</script>

<template>
  <h1>Movies</h1>

  <ul v-if="movies && movies.length > 0">
    <li v-for="movie in movies" :key="movie.id">
      <p>{{ movie.title }}</p>
      <p>{{ movie.year }}</p>
      <p>{{ movie.runtime }}</p>
      <img :src="movie.poster" alt="Movie Poster" width="300" />
    </li>
  </ul>

  <p v-else>Loading movies...</p>
</template>
