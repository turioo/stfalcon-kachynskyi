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
      <a
        class="header-container__contact"
        href="https://t.me/turio_o"
        target="_blank"
        >Contact Us</a
      >
      <div class="header-container__hamburger" @click="open = !open">
        <div id="nav-icon3" v-bind:class="{ open: open }">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    <div class="mobilemenu" v-bind:class="{ open: open }">
      <div class="mobilemenu-wrapper">
        <div class="mobilemenu-container">
          <div class="mobilemenu-buttons" @click="open = false">
            <router-link to="/" class="navbar-items__item">Search</router-link>
            <router-link to="/form" class="navbar-items__item"
              >Suggest your film</router-link
            >
            <a
              class="navbar-items__item"
              href="https://t.me/turio_o"
              target="_blank"
              >Contact Us</a
            >
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style src="./style.scss" lang="scss"></style>
<script src="./index.js"></script>
