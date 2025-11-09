<template>
  <el-dialog
    v-model="visible"
    :title="isEdit ? '编辑联系人' : '添加联系人'"
    width="600px"
    :before-close="handleClose"
  >
    <el-form
      ref="formRef"
      :model="form"
      :rules="rules"
      label-width="80px"
      label-position="top"
    >
      <el-form-item label="姓名" prop="name">
        <el-input
          v-model="form.name"
          placeholder="请输入联系人姓名"
          maxlength="50"
          show-word-limit
        />
      </el-form-item>

      <el-form-item label="电话号码" prop="phone">
        <el-input
          v-model="form.phone"
          placeholder="请输入电话号码"
          maxlength="20"
        />
      </el-form-item>

      <el-form-item label="邮箱" prop="email">
        <el-input
          v-model="form.email"
          placeholder="请输入邮箱地址"
          type="email"
          maxlength="100"
        />
      </el-form-item>

      <el-form-item label="公司" prop="company">
        <el-input
          v-model="form.company"
          placeholder="请输入公司名称"
          maxlength="100"
          show-word-limit
        />
      </el-form-item>

      <el-form-item label="地址" prop="address">
        <el-input
          v-model="form.address"
          type="textarea"
          placeholder="请输入详细地址"
          maxlength="200"
          show-word-limit
          :rows="3"
        />
      </el-form-item>
    </el-form>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleClose">取消</el-button>
        <el-button
          type="primary"
          :loading="loading"
          @click="handleSubmit"
        >
          {{ isEdit ? '更新' : '创建' }}
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import { ElMessage } from 'element-plus'

export default {
  name: 'ContactForm',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    contact: {
      type: Object,
      default: null
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:visible', 'submit'],
  data() {
    return {
      form: {
        name: '',
        phone: '',
        email: '',
        company: '',
        address: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入联系人姓名', trigger: 'blur' },
          { min: 2, max: 50, message: '姓名长度在 2 到 50 个字符', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入电话号码', trigger: 'blur' },
          { pattern: /^1[3-9]\d{9}$|^0\d{2,3}-?\d{7,8}$/, message: '请输入有效的电话号码', trigger: 'blur' }
        ],
        email: [
          { type: 'email', message: '请输入有效的邮箱地址', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    isEdit() {
      return !!this.contact?.id
    }
  },
  watch: {
    visible(newVal) {
      if (newVal) {
        this.resetForm()
        if (this.contact) {
          this.form = { ...this.contact }
        }
      }
    }
  },
  methods: {
    resetForm() {
      this.form = {
        name: '',
        phone: '',
        email: '',
        company: '',
        address: ''
      }
      if (this.$refs.formRef) {
        this.$refs.formRef.clearValidate()
      }
    },
    handleClose() {
      this.$emit('update:visible', false)
    },
    async handleSubmit() {
      try {
        const valid = await this.$refs.formRef.validate()
        if (valid) {
          this.$emit('submit', this.form)
        }
      } catch (error) {
        ElMessage.error('请检查表单输入')
      }
    }
  }
}
</script>

<style scoped>
.dialog-footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

:deep(.el-form-item__label) {
  font-weight: 500;
  color: #303133;
  padding-bottom: 8px;
}

:deep(.el-dialog__body) {
  padding: 20px;
}
</style>
