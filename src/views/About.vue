<template>
  <div class="about">
    <div class="container">
      <div class="card">
        <h1>关于通讯录管理系统</h1>
        
        <div class="content">
          <div class="section">
            <h2>项目简介</h2>
            <p>
              这是一个基于前后端分离架构开发的通讯录管理系统，采用 Vue 3 + Spring Boot 技术栈，
              实现了联系人的增删改查等核心功能。
            </p>
          </div>

          <div class="section">
            <h2>技术栈</h2>
            <div class="tech-stack">
              <div class="tech-category">
                <h3>前端技术</h3>
                <ul>
                  <li>Vue 3 - 渐进式JavaScript框架</li>
                  <li>Vue Router - 官方路由管理器</li>
                  <li>Vuex - 状态管理库</li>
                  <li>Element Plus - 组件库</li>
                  <li>Axios - HTTP客户端</li>
                </ul>
              </div>
              <div class="tech-category">
                <h3>后端技术</h3>
                <ul>
                  <li>Spring Boot - Java开发框架</li>
                  <li>Spring Data JPA - 数据访问层</li>
                  <li>H2 Database - 内存数据库</li>
                  <li>RESTful API - API设计风格</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="section">
            <h2>功能特性</h2>
            <ul class="features-list">
              <li>✅ 联系人信息的增删改查</li>
              <li>✅ 智能搜索功能</li>
              <li>✅ 响应式设计，支持移动端</li>
              <li>✅ 数据验证和错误处理</li>
              <li>✅ 现代化的用户界面</li>
            </ul>
          </div>

          <div class="section">
            <h2>开发信息</h2>
            <div class="info-grid">
              <div class="info-item">
                <strong>开发模式：</strong>
                <span>前后端分离</span>
              </div>
              <div class="info-item">
                <strong>前端端口：</strong>
                <span>8080</span>
              </div>
              <div class="info-item">
                <strong>后端端口：</strong>
                <span>8081</span>
              </div>
              <div class="info-item">
                <strong>数据库：</strong>
                <span>H2 (内存数据库)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.about {
  padding: 40px 0;
  min-height: calc(100vh - 60px);
  background: #f5f7fa;
}

.card {
  background: white;
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

h1 {
  color: #303133;
  margin-bottom: 30px;
  text-align: center;
  font-size: 2.5rem;
}

.section {
  margin-bottom: 40px;
}

.section h2 {
  color: #409eff;
  margin-bottom: 15px;
  font-size: 1.5rem;
  border-bottom: 2px solid #409eff;
  padding-bottom: 8px;
}

.section p {
  line-height: 1.6;
  color: #606266;
  font-size: 1.1rem;
}

.tech-stack {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 20px;
}

.tech-category h3 {
  color: #303133;
  margin-bottom: 15px;
  font-size: 1.2rem;
}

.tech-category ul {
  list-style: none;
  padding: 0;
}

.tech-category li {
  padding: 8px 0;
  color: #606266;
  border-bottom: 1px solid #f0f0f0;
}

.tech-category li:last-child {
  border-bottom: none;
}

.features-list {
  list-style: none;
  padding: 0;
}

.features-list li {
  padding: 10px 0;
  color: #606266;
  font-size: 1.1rem;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
}

.info-item {
  display: flex;
  justify-content: space-between;
  padding: 12px;
  background: #f8f9fa;
  border-radius: 6px;
  border-left: 4px solid #409eff;
}

.info-item strong {
  color: #303133;
}

@media (max-width: 768px) {
  .card {
    padding: 20px;
    margin: 0 10px;
  }
  
  h1 {
    font-size: 2rem;
  }
  
  .tech-stack {
    grid-template-columns: 1fr;
  }
  
  .info-grid {
    grid-template-columns: 1fr;
  }
}
</style>
