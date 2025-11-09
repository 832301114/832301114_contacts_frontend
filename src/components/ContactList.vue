<template>
  <div class="contact-list">
    <div class="list-header">
      <h2>联系人列表</h2>
      <el-button type="primary" @click="$emit('add-contact')" :icon="Plus">
        添加联系人
      </el-button>
    </div>

    <div v-if="loading" class="loading">
      <el-icon class="is-loading"><Loading /></el-icon>
      加载中...
    </div>

    <div v-else-if="error" class="error-message">
      {{ error }}
    </div>

    <div v-else-if="contacts.length === 0" class="empty-state">
      <el-empty description="暂无联系人数据">
        <el-button type="primary" @click="$emit('add-contact')">添加第一个联系人</el-button>
      </el-empty>
    </div>

    <div v-else class="contacts-grid">
      <div
        v-for="contact in contacts"
        :key="contact.id"
        class="contact-card"
      >
        <div class="contact-header">
          <h3 class="contact-name">{{ contact.name }}</h3>
          <div class="contact-actions">
            <el-button
              type="primary"
              link
              :icon="Edit"
              @click="$emit('edit-contact', contact)"
              title="编辑"
            >
            </el-button>
            <el-button
              type="danger"
              link
              :icon="Delete"
              @click="$emit('delete-contact', contact.id)"
              title="删除"
            >
            </el-button>
          </div>
        </div>
        
        <div class="contact-info">
          <div class="contact-item">
            <el-icon><Phone /></el-icon>
            <span>{{ contact.phone }}</span>
          </div>
          <div v-if="contact.email" class="contact-item">
            <el-icon><Message /></el-icon>
            <span>{{ contact.email }}</span>
          </div>
          <div v-if="contact.company" class="contact-item">
            <el-icon><OfficeBuilding /></el-icon>
            <span>{{ contact.company }}</span>
          </div>
          <div v-if="contact.address" class="contact-item">
            <el-icon><Location /></el-icon>
            <span>{{ contact.address }}</span>
          </div>
        </div>
        
        <div class="contact-footer">
          <small>更新于: {{ formatDate(contact.updatedTime) }}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  Plus,
  Edit,
  Delete,
  Phone,
  Message,
  OfficeBuilding,
  Location,
  Loading
} from '@element-plus/icons-vue'

export default {
  name: 'ContactList',
  props: {
    contacts: {
      type: Array,
      default: () => []
    },
    loading: {
      type: Boolean,
      default: false
    },
    error: {
      type: String,
      default: null
    }
  },
  components: {
    Plus,
    Edit,
    Delete,
    Phone,
    Message,
    OfficeBuilding,
    Location,
    Loading
  },
  emits: ['add-contact', 'edit-contact', 'delete-contact'],
  methods: {
    formatDate(dateString) {
      if (!dateString) return '未知'
      const date = new Date(dateString)
      return date.toLocaleDateString('zh-CN') + ' ' + date.toLocaleTimeString('zh-CN', {
        hour: '2-digit',
        minute: '2-digit'
      })
    }
  }
}
</script>

<style scoped>
.contact-list {
  margin-bottom: 30px;
}

.list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.list-header h2 {
  color: #303133;
  font-weight: 600;
}

.contacts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.contact-card {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #e4e7ed;
  transition: all 0.3s ease;
  position: relative;
}

.contact-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.15);
}

.contact-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 10px;
}

.contact-name {
  color: #303133;
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
}

.contact-actions {
  display: flex;
  gap: 5px;
}

.contact-info {
  space-y: 8px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  color: #606266;
  font-size: 0.9rem;
}

.contact-item .el-icon {
  color: #909399;
  font-size: 1rem;
}

.contact-footer {
  margin-top: 15px;
  padding-top: 10px;
  border-top: 1px solid #f0f0f0;
  color: #909399;
  font-size: 0.8rem;
}

.loading {
  text-align: center;
  padding: 40px;
  color: #909399;
  font-size: 1.1rem;
}

.loading .el-icon {
  margin-right: 8px;
}

.empty-state {
  text-align: center;
  padding: 60px 20px;
}

@media (max-width: 768px) {
  .list-header {
    flex-direction: column;
    gap: 15px;
    align-items: stretch;
  }
  
  .contacts-grid {
    grid-template-columns: 1fr;
  }
}
</style>
