<template>
<div class="main-header">
  <nav class="navbar text-dark font-weight-bold">
  <span class="navbar-text m-3 h1">Thoughts</span>
</nav>
</div>
</template>

<script>
export default {
  name: 'MainHeader',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .navbar{
    background: rgb(222, 229, 234);
    height: 100px;
  }
  .navbar-text{
    font-size: 50px;
    font-family: "Lucida Console", "Courier New", monospace;
  }
  
</style>