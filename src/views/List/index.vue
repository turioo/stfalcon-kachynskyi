<template>
  <div class="search">
    <div class="search-wrapper">
      <div class="search-bg">
        <img src="@/assets/img/search-bg.png" alt="background" />
      </div>
      <Loader :class="moviesListLoading ? '' : 'hidden'" />
      <div
        class="search-container"
        v-if="!moviesListLoading && moviesList && moviesList.length > 0"
      >
        <Carousel v-bind="settings" :breakpoints="breakpoints">
          <Slide
            v-for="movie in moviesList"
            v-bind:key="movie"
            class="movies-list-item__wrap"
          >
            <router-link
              :to="{ name: 'movie', params: { id: movie.imdbID } }"
              class="movies-list-item"
            >
              <div class="item-img">
                <img :src="movie.Poster" alt="poster" />
              </div>
              <div class="item-info">
                <h3 class="item-info__title">{{ movie.Title }}</h3>
                <p class="item-info__year">{{ movie.Year }}</p>
              </div>
            </router-link>
          </Slide>
          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </div>
      <div
        class="search-container error"
        v-if="!moviesListLoading && !moviesList"
      >
        <h1>No matches found</h1>
        <button class="return-back" @click="this.$router.back">
          ← Return Back
        </button>
      </div>
    </div>
  </div>
</template>

<style src="./style.scss" lang="scss"></style>
<script src="./index.js"></script>
