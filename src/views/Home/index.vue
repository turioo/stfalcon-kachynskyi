<template>
  <div class="home">
    <div class="home-wrapper">
      <div class="home-bg">
        <img src="@/assets/img/home-bg.png" alt="background" />
      </div>
      <div class="home-container">
        <form class="home-container__form">
          <div class="input-row">
            <input type="text" id="search" name="search" value="" />
            <label for="search">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  stroke="#8A8D94"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Find a movie</label
            >
          </div>
          <button type="submit">Find</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style src="./style.scss" lang="scss"></style>
<script src="./index.js"></script>
