<template>
    <div class="nav-bar text-light">
        <nav class="navbar navbar-dark bg-dark navbar-expand-lg py-2 fixed-top">
        <div class="container">
            <a href="#" class="navbar-brand"> Thoughts!</a>
        <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse" id="navbar">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item"><a @click="onProfileClick" class="nav-link">Profile</a></li>
                <li class="nav-item"><a class="nav-link">Settings</a></li>
                <li class="nav-item"><a @click="onSignOut" class="nav-link">Sign Out</a></li>
            </ul>
        </div>
        </div>
    </nav>
    </div>
    <div class="conatiner justify-content-center">
        <UserInfo v-if="profile"/>
    </div>
</template>

<script>
import UserInfo from './UserInfo.vue'
export default {
    name:'navbar',
    data() {
        return {
            profile: false,
        }
    },
    components: {
      UserInfo  
    },
    methods : {
        onProfileClick() {
            this.profile = true
        },
        onSignOut(){
            this.$router.push('/')
        }
    }
}
</script>