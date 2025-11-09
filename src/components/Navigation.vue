<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-logo">
          <el-icon><User /></el-icon>
          <span>通讯录管理系统</span>
        </router-link>
      </div>
      <div class="navbar-menu">
        <router-link to="/" class="navbar-item">首页</router-link>
        <router-link to="/contacts" class="navbar-item">联系人管理</router-link>
        <router-link to="/about" class="navbar-item">关于</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { User } from '@element-plus/icons-vue'

export default {
  name: 'Navigation',
  components: {
    User
  }
}
</script>

<style scoped>
.navbar {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.navbar .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.navbar-brand {
  display: flex;
  align-items: center;
}

.navbar-logo {
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 15px 0;
}

.navbar-logo .el-icon {
  margin-right: 10px;
  font-size: 1.8rem;
}

.navbar-menu {
  display: flex;
  gap: 30px;
}

.navbar-item {
  color: white;
  text-decoration: none;
  padding: 20px 0;
  position: relative;
  transition: color 0.3s ease;
  font-weight: 500;
}

.navbar-item:hover {
  color: #e1f5fe;
}

.navbar-item.router-link-active {
  color: #e1f5fe;
}

.navbar-item.router-link-active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: #e1f5fe;
  border-radius: 2px 2px 0 0;
}

@media (max-width: 768px) {
  .navbar .container {
    flex-direction: column;
    padding: 10px 20px;
  }
  
  .navbar-menu {
    gap: 20px;
    margin-top: 10px;
  }
  
  .navbar-item {
    padding: 10px 0;
  }
}
</style>
