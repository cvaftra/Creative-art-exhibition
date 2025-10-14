<template>
    <div class="api-page">
        <h1>API 接口文档</h1>
        <div class="content">
            <section class="api-section">
                <h2>主题</h2>
                <div class="api-item">
                    <h3>获取主题列表</h3>
                    <p><span class="method">GET</span> /topics</p>
                    <div class="params">
                        <h4>接收参数</h4>
                        <ul>
                            <li><code>page</code>: 页数</li>
                            <li><code>tab</code>: 主题分类</li>
                            <li><code>limit</code>: 每页数量</li>
                        </ul>
                    </div>
                </div>

                <div class="api-item">
                    <h3>获取主题详情</h3>
                    <p><span class="method">GET</span> /topic/:id</p>
                </div>
            </section>

            <section class="api-section">
                <h2>用户</h2>
                <div class="api-item">
                    <h3>用户登录</h3>
                    <p><span class="method post">POST</span> /user/login</p>
                </div>

                <div class="api-item">
                    <h3>用户详情</h3>
                    <p><span class="method">GET</span> /user/:loginname</p>
                </div>
            </section>
        </div>
    </div>
</template>

<style scoped>
.api-page {
    max-width: 1200px;
    margin: 70px auto 0;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 800px;
}

h1 {
    margin-bottom: 20px;
    color: #2c3e50;
}

.api-section {
    margin-bottom: 30px;
}

h2 {
    color: #42b983;
    padding-bottom: 10px;
    border-bottom: 2px solid #eee;
    margin: 20px 0;
}

.api-item {
    margin: 20px 0;
    padding: 15px;
    border: 1px solid #eee;
    border-radius: 4px;
}

h3 {
    color: #2c3e50;
    margin-bottom: 10px;
}

.method {
    display: inline-block;
    padding: 2px 8px;
    background-color: #42b983;
    color: white;
    border-radius: 4px;
    margin-right: 8px;
    font-size: 14px;
}

.method.post {
    background-color: #e7c000;
}

code {
    background-color: #f8f8f8;
    padding: 2px 6px;
    border-radius: 4px;
    color: #e96900;
}

.params h4 {
    margin: 15px 0 10px;
    color: #666;
}

ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

li {
    margin: 8px 0;
    color: #666;
}
</style>