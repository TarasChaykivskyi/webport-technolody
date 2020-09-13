<template>
  <div id="app">
    <Header />
    <RouterView class="container main-content" />
    <footer></footer>
  </div>
</template>

<script>
import Header from "./components/Header/Header";

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>