<template>
<MainHeader/>
  <div class="home">
    <div class="auth">
      <div class="anchor">
        <a @click="onAnchorClick('signin')" href="#">Sign In |</a>
        <a @click="onAnchorClick('signup')" href="#">Sign Up</a>
      </div>
      <Login v-if="signInActive"/>
      <SignUp v-else/>
    </div>
     <div class="users">
        <button @click="onUserClick" class="btn btn-dark">
          Users
        </button>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MainHeader from '@/components/MainHeader.vue'
import Login from '../components/auth/Login.vue'
import SignUp from '../components/auth/SignUp.vue'


export default {
  name: 'HomeView',
  data() {
    return {
      signInActive: true
    }
  },

  components: {
    MainHeader,
    Login,
    SignUp
  },

  methods: {
    onSignUpClick () {
      this.signUpActive = true;
      this.signInActive = false;
      console.log(this.signUpActive)
    },
    onSignInClick() {
      this.signUpActive = false;
      this.signInActive = true;
    },
    onAnchorClick(val) {
      if(val == 'signin') {
        this.signInActive = true
      }
      else {
        this.signInActive = false
      }
    },
    onUserClick() {
      this.$router.push('/users')
    }
  }

}
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  margin-top: 6rem;
  margin-bottom: 2rem;
}
.anchor{
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 1rem;
}
.auth {
  background: #f6f6f6;
  display: inline-block;
  width: 500px;
  -webkit-box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
  box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
  height: 100%;
}
.anchor a {
  padding: 5px;
  font-size: 1.3rem;
  font-style: bold;
  text-decoration: none;
  font-weight: 700;
}
</style>