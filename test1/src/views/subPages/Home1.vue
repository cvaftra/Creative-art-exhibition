<template>
    <div>
        <h1> 
            {{ $route.params.id }}
        </h1>
        <ul>
            <li v-for="item in list" :key="item.id">
                {{ item.title }}
            </li>
        </ul>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
const list = ref([]);
// 箭头函数
function fn(){}
const fn2 = () => {}
onMounted(() => {
    fetch('https://cnodejs.org/api/v1/topics')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            list.value = data.data;
        })
})
// 前后端交互
// https://cnodejs.org/api/v1/topics
// fetch('https://cnodejs.org/api/v1/topics')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     })
</script>


