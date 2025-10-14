<template>
    <div class="about-page">
        <h1>关于</h1>
        <div class="content">
            <section>
                <h2>关于 CNode</h2>
                <p>CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
                <p>在这里你可以：</p>
                <ul>
                    <li>向别人提出你遇到的问题</li>
                    <li>帮助遇到问题的人</li>
                    <li>分享自己的知识</li>
                    <li>和其它人一起进步</li>
                </ul>
            </section>

            <section>
                <h2>技术栈</h2>
                <ul class="tech-stack">
                    <li>
                        <span class="tech">Node.js</span>
                        <span class="desc">服务端运行环境</span>
                    </li>
                    <li>
                        <span class="tech">Express</span>
                        <span class="desc">网络框架</span>
                    </li>
                    <li>
                        <span class="tech">MongoDB</span>
                        <span class="desc">数据库</span>
                    </li>
                </ul>
            </section>

            <section>
                <h2>相关链接</h2>
                <ul class="links">
                    <li>
                        <a href="https://github.com/cnodejs/nodeclub" target="_blank">
                            <span class="icon">🔗</span>
                            GitHub 仓库
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/cnodejs/nodeclub/issues" target="_blank">
                            <span class="icon">🐛</span>
                            问题反馈
                        </a>
                    </li>
                </ul>
            </section>
        </div>
    </div>
</template>

<style scoped>
.about-page {
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

section {
    margin-bottom: 30px;
}

h2 {
    color: #42b983;
    margin: 20px 0;
    padding-bottom: 10px;
    border-bottom: 2px solid #eee;
}

p {
    line-height: 1.6;
    color: #666;
    margin: 15px 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    margin: 10px 0;
    color: #666;
}

.tech-stack li {
    display: flex;
    align-items: center;
    padding: 10px;
    border: 1px solid #eee;
    border-radius: 4px;
    margin: 10px 0;
}

.tech {
    font-weight: bold;
    color: #42b983;
    width: 100px;
}

.desc {
    color: #666;
}

.links li {
    margin: 15px 0;
}

.links a {
    color: #42b983;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 10px;
}

.links a:hover {
    text-decoration: underline;
}

.icon {
    font-size: 20px;
}
</style>