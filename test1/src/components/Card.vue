<script setup>
    defineProps(['title'])
</script>
<template>
    <div class="card">
        <header>{{ title }}</header>
        <div>
            <slot></slot>
        </div>
    </div>
</template>
<style scoped>
    .card{
        width: 200px;
        border: 2px solid #000;
    }
    header{
        background-color: #ccc;
    }
</style>