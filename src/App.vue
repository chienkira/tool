<template>
  <div id="app">
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://chienkira.github.io/blog">
          <img src="https://chienkira.github.io/blog/images/chienkira.png" width="auto" height="200">
        </a>
      </div>
      <div class="navbar-menu is-active">
        <div class="navbar-start">
          <router-link to="/" class="navbar-item">TOP</router-link>
          <router-link to="/string-utilities" class="navbar-item">STRING</router-link>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>
