<script setup>
import Button from '../components/Button.vue'
import Card from '@/components/Card.vue'
import { ref } from 'vue'
import add, { log, str, num as num2 } from './module'
// import add from './module'
const is_show_header = ref(true)
log( add(1,2) )
log('abc')
log(num2)
// 模块化语法（只有js，关键字：import export）
// 一个js文件就是一个模块，实现js文件里引用一个js文件
// 组件化（组件是特殊的模块）
// 父子组件传参（props,slot）

// 虚拟DOM
// 文本插值
// 响应式数据
// 条件渲染
// 事件处理
// 列表渲染

// 路由

</script>
<template>
    <div class="getstart">
        <Card title="积分榜">
            <h1>hello</h1>
        </Card>
        <Card title="友情社区">
            <h2>标题</h2>
            <ul>
                <li>1</li>
                <li>2</li>
            </ul>
        </Card>
        <Button name="开始" />
        <Button name="结束" />
        <h1 v-if="is_show_header">新手入门</h1>
        <button @click="is_show_header = !is_show_header">点击</button>
        <div class="content">
            <h2>Node.js 入门</h2>
            <p>这是一个 Node.js 中文社区，如果你对 Node.js 感兴趣，可以查看以下资源：</p>
            <ul>
                <li><a href="https://nodejs.org/" target="_blank">Node.js 官网</a></li>
                <li><a href="https://nodejs.org/docs/latest/api/" target="_blank">Node.js API 文档</a></li>
                <li><a href="https://github.com/nodejs/node" target="_blank">Node.js GitHub 仓库</a></li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.getstart {
    max-width: 1200px;
    margin: 70px auto 0;
    padding: 20px;
}

.content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

h1 {
    margin-bottom: 20px;
    color: #2c3e50;
}

h2 {
    color: #42b983;
    margin: 20px 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    margin: 10px 0;
}

a {
    color: #42b983;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}
</style>