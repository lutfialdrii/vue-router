<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/portfolio">Kesibukan</router-link> |
    <router-link to="/contact">Contact</router-link> |
  </nav>
  <router-view/>
    <footer class="bg-red-400 pt-2 pb-2 container">
    <p class="text-center text-white">Made with ❤ by Lutfi</p>
  </footer>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

nav {
  align-content: center;
  margin: 0 auto;
  text-align: center;
  padding-top: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #f87171;
}
</style>
