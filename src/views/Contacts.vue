<template>
  <div class="contacts">
    <div class="container">
      <SearchBar
        v-model="searchKeyword"
        @search="handleSearch"
      />

      <ContactList
        :contacts="contacts"
        :loading="loading"
        :error="error"
        @add-contact="showAddForm = true"
        @edit-contact="handleEdit"
        @delete-contact="handleDelete"
      />

      <ContactForm
        v-model:visible="showAddForm"
        :loading="formLoading"
        @submit="handleCreateContact"
      />

      <ContactForm
        v-model:visible="showEditForm"
        :contact="editingContact"
        :loading="formLoading"
        @submit="handleUpdateContact"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { ElMessage, ElMessageBox } from 'element-plus'
import SearchBar from '@/components/SearchBar.vue'
import ContactList from '@/components/ContactList.vue'
import ContactForm from '@/components/ContactForm.vue'

export default {
  name: 'Contacts',
  components: {
    SearchBar,
    ContactList,
    ContactForm
  },
  data() {
    return {
      searchKeyword: '',
      showAddForm: false,
      showEditForm: false,
      editingContact: null,
      formLoading: false
    }
  },
  computed: {
    ...mapState(['contacts', 'loading', 'error'])
  },
  mounted() {
    this.fetchContacts()
  },
  methods: {
    ...mapActions([
      'fetchContacts',
      'createContact',
      'updateContact',
      'deleteContact',
      'searchContacts'
    ]),
    
    async handleSearch(keyword) {
      if (keyword.trim()) {
        await this.searchContacts(keyword)
      } else {
        await this.fetchContacts()
      }
    },
    
    handleEdit(contact) {
      this.editingContact = { ...contact }
      this.showEditForm = true
    },
    
    async handleCreateContact(contactData) {
      this.formLoading = true
      try {
        await this.createContact(contactData)
        this.showAddForm = false
        ElMessage.success('联系人创建成功')
      } catch (error) {
        // 错误信息在store中已经处理
      } finally {
        this.formLoading = false
      }
    },
    
    async handleUpdateContact(contactData) {
      this.formLoading = true
      try {
        await this.updateContact({
          id: this.editingContact.id,
          contactData
        })
        this.showEditForm = false
        this.editingContact = null
        ElMessage.success('联系人更新成功')
      } catch (error) {
        // 错误信息在store中已经处理
      } finally {
        this.formLoading = false
      }
    },
    
    async handleDelete(contactId) {
      try {
        await ElMessageBox.confirm(
          '确定要删除这个联系人吗？此操作不可恢复。',
          '确认删除',
          {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }
        )
        
        await this.deleteContact(contactId)
        ElMessage.success('联系人删除成功')
      } catch (error) {
        if (error !== 'cancel') {
          ElMessage.error('删除失败：' + error.message)
        }
      }
    }
  }
}
</script>

<style scoped>
.contacts {
  padding: 40px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
</style>
