<template>
    <div class="container">
        <h1>Get All Users</h1>
        <button @click="onGetAllUser" class="btn btn-primary">Get Users</button>
        <div class="users-list">
            {{users}}
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
            users : ''
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