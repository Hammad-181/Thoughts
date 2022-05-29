<template>
    <div class="container">
            <div class="card bg-dark text-light justify-content-center m-3" style="max-width: 18rem;">
                <div class="card-header" v-fontsize="'25px'" >Profile</div>
                <div class="card-body">
                    <ul class="info" v-fontsize="'15px'" v-if="getUserProfile" >
                        <ul class="name text-light">Name : {{getUserProfile.response.firstName +" " + getUserProfile.response.lastName}}</ul>
                        <ul class="name text-light" >Email : {{getUserProfile.response.email}}</ul>
                        <ul class="name text-light">User Id : {{getUserProfile.response.id}}</ul>
                    </ul>
                </div>
                </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name:'userinfo',
    data() {
        return {
           
        }
    },
    computed: {
        ...mapGetters(['getUserProfile']),
    },
    mounted(){
        console.log(this.getUserProfile)
    },
    methods : {
    
    }
}
</script>

<style scoped>
.info{
    margin-left: -45px;
}
.card{
    position:relative;
    top: 150px;
}

</style>