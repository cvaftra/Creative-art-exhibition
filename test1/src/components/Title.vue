<template>
    <h2>{{ title }}</h2>
    <h3>{{ subTitle }}</h3>
    <div>
        <slot></slot>
    </div>
</template>
<script setup>
    defineProps(['title', 'subTitle'])
</script>
<style>
</style>