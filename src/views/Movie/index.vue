<template>
  <div class="movie">
    <div class="movie-wrapper">
      <div class="movie-bg">
        <img src="@/assets/img/movie-bg.png" alt="background" />
      </div>
      <Loader :class="movieInfoLoading ? '' : 'hidden'" />
      <div class="movie-container" v-if="!movieInfoLoading && movieInfo">
        <button class="movie-back" @click="this.$router.back">
          ← Return back
        </button>
        <div class="movie-img">
          <img :src="movieInfo.Poster" alt="poster" />
        </div>
        <div class="movie-info">
          <h1>{{ movieInfo.Title }}</h1>
          <p>
            <b>Genre:</b>
            {{ movieInfo.Genre }}
          </p>
          <p>
            <b>Plot:</b>
            {{ movieInfo.Plot }}
          </p>
          <p>
            <b>Actors:</b>
            {{ movieInfo.Actors }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="./style.scss" lang="scss"></style>
<script src="./index.js"></script>
