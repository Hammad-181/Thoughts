<template>
    <div class="container">
        <div class="card bg-light text-dark m-2">
            <div class="message m-2">
                 {{message}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'tosater',
    props: ['message']
}
</script>>