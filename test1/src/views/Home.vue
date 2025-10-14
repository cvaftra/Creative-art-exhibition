<template>
    <h1>首页</h1>
    <Title :title="title" sub-title="子标题"/>
    <Title>
        <h1>123</h1>
    </Title>
</template>
<script setup>
    import { log, title} from '../utils/common'
    import { ref } from 'vue'
    import { getTopics } from '../api/topics'
    import Title from '../components/Title.vue'
    log('Home')

    //前后端交互
    const list = ref([])


    onMounted(() => {
        getTopics().then(res => {
            console.log(res)
            list.value = res.data.data
        })
    })

    axios.get('https://cnodejs.org/api/v1/topics')
        .then(res => {
            console.log(res)
            list.value = res.data.data
        })
        .catch(err => {
            console.log(err)
        })
        .finally(() => {
            console.log('请求完成')
        })
</script>
<style></style>