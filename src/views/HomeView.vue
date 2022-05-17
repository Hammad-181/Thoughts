<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <SignUp/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Login from '../components/auth/Login.vue'
import SignUp from '../components/auth/SignUp.vue'


export default {
  name: 'HomeView',
  data() {
    return {
      
    }
  },

  components: {
    HelloWorld,
    Login,
    SignUp
  },
}
</script>
