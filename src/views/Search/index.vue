<template>
  <div class="search">
    <div class="search-wrapper">
      <div class="search-bg">
        <img src="@/assets/img/search-bg.png" alt="background" />
      </div>
      <Loader :class="moviesListLoading ? '' : 'hidden'" />
      <div class="search-container" v-if="!moviesListLoading">
        <Carousel v-bind="settings">
          <Slide
            v-for="movie in moviesList"
            v-bind:key="movie"
            class="movies-list-item__wrap"
          >
            <div class="movies-list-item">
              <img :src="movie.Poster" alt="poster" />
              <div class="item-info">
                <h3 class="item-info__title">{{ movie.Title }}</h3>
                <p class="item-info__year">{{ movie.Year }}</p>
              </div>
            </div>
          </Slide>
          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </div>
    </div>
  </div>
</template>

<style src="./style.scss" lang="scss"></style>
<script src="./index.js"></script>
