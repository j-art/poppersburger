<script setup>
import { RouterLink, RouterView } from 'vue-router'
import helloMessage from '@/components/helloMessage.vue'
</script>

<template>
  <header>
    <img alt="Popper's Burgers logo" class="logo" src="@/assets/logo_poppersburgers.png" width="200" height="200" />

    <div class="wrapper">
      <helloMessage msg="Addictive Burgers!" />

      <nav>
        <RouterLink to="/">Menú</RouterLink>
        <RouterLink to="/about">Popperianos</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Fredoka+One&display=swap');
@import '@/assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  font-family: 'Architects Daughter', cursive;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1.2rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
