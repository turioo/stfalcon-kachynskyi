<template>
  <header>
    <div class="header-container">
      <router-link to="/" class="header-container__logo"
        >MovieFinder</router-link
      >
      <nav class="header-container__nav">
        <router-link to="/">Search</router-link>
        <router-link to="/form">Suggest your film</router-link>
      </nav>
      <a class="header-container__contact" href="/">Contact Us</a>
    </div>
  </header>
</template>

<style src="./style.scss" lang="scss"></style>
<script src="./index.js"></script>
