<template>
  <div class="home">
    <div class="container">
      <div class="hero-section">
        <h1>欢迎使用通讯录管理系统</h1>
        <p class="subtitle">高效管理您的联系人信息</p>
        <el-button type="primary" size="large" @click="goToContacts">
          开始使用
          <el-icon><ArrowRight /></el-icon>
        </el-button>
      </div>

      <div class="features-section">
        <h2>功能特性</h2>
        <div class="features-grid">
          <div class="feature-card">
            <el-icon class="feature-icon"><User /></el-icon>
            <h3>联系人管理</h3>
            <p>轻松添加、编辑、删除联系人信息</p>
          </div>
          <div class="feature-card">
            <el-icon class="feature-icon"><Search /></el-icon>
            <h3>智能搜索</h3>
            <p>快速查找您需要的联系人</p>
          </div>
          <div class="feature-card">
            <el-icon class="feature-icon"><Setting /></el-icon>
            <h3>数据安全</h3>
            <p>可靠的数据存储和保护</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ArrowRight, User, Search, Setting } from '@element-plus/icons-vue'

export default {
  name: 'Home',
  components: {
    ArrowRight,
    User,
    Search,
    Setting
  },
  methods: {
    goToContacts() {
      this.$router.push('/contacts')
    }
  }
}
</script>

<style scoped>
.home {
  min-height: calc(100vh - 60px);
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.hero-section {
  text-align: center;
  padding: 100px 20px;
}

.hero-section h1 {
  font-size: 3rem;
  margin-bottom: 20px;
  font-weight: 700;
}

.subtitle {
  font-size: 1.3rem;
  margin-bottom: 40px;
  opacity: 0.9;
}

.features-section {
  background: white;
  color: #333;
  padding: 80px 20px;
  border-radius: 20px 20px 0 0;
}

.features-section h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 60px;
  color: #303133;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  max-width: 1000px;
  margin: 0 auto;
}

.feature-card {
  text-align: center;
  padding: 40px 20px;
  border-radius: 12px;
  background: #f8f9fa;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: 3rem;
  color: #667eea;
  margin-bottom: 20px;
}

.feature-card h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #303133;
}

.feature-card p {
  color: #606266;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .hero-section h1 {
    font-size: 2rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
