<template>
    <div class="container">
        <h1>Get All Users</h1>
        <button @click="onGetAllUser" class="btn btn-primary">Get Users</button>
            <div class="card bg-light mb-3" style="max-width: 18rem;">
                <div class="card-header font-weight-bold">Users</div>
                <div class="card-body">
                    <ul v-for="user in users" :key="user.id" >
                        <ul class="name text-dark">Name : {{user.firstName +" " + user.lastName}}</ul>
                        <ul class="name text-dark">Email : {{user.email}}</ul>
                        <ul class="name text-dark">User Id : {{user.id}}</ul>
                    </ul>
                </div>
                </div>
        <button @click="onDeleteAllUser" class="btn btn-primary">Delete All Users</button>
    </div>
</template>

<script>
import Api from '@/api';
export default {
    name:'userinfo',
    data() {
        return {
            users : []
        }
    },
    methods : {
        onGetAllUser() {
            Api.getAllUser().then(res => this.users = res.data)
        },
        onDeleteAllUser() {
            Api.deleteAllUser().then(res => console.log(res))
        }
    }
}
</script>

<style scoped>

</style>