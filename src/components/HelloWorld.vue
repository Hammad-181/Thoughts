<template>
<div class="main-header">
  <nav class="navbar text-dark font-weight-bold">
  <span class="navbar-brand m-3 h1">Thoughts</span>
</nav>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .navbar{
    background: #d8d6d6c5;
  }
</style>