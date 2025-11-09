<template>
  <div class="search-bar">
    <el-input
      v-model="searchText"
      placeholder="搜索联系人（姓名或电话号码）"
      :prefix-icon="Search"
      clearable
      @input="handleSearch"
      @clear="handleClear"
    >
      <template #append>
        <el-button :icon="Search" @click="handleSearch" />
      </template>
    </el-input>
  </div>
</template>

<script>
import { Search } from '@element-plus/icons-vue'
import { debounce } from 'lodash-es'

export default {
  name: 'SearchBar',
  props: {
    modelValue: {
      type: String,
      default: ''
    }
  },
  emits: ['update:modelValue', 'search'],
  data() {
    return {
      Search,
      searchText: this.modelValue
    }
  },
  watch: {
    modelValue(newVal) {
      this.searchText = newVal
    }
  },
  created() {
    this.debouncedSearch = debounce(this.doSearch, 300)
  },
  methods: {
    handleSearch() {
      this.$emit('update:modelValue', this.searchText)
      this.debouncedSearch()
    },
    doSearch() {
      this.$emit('search', this.searchText)
    },
    handleClear() {
      this.$emit('update:modelValue', '')
      this.$emit('search', '')
    }
  }
}
</script>

<style scoped>
.search-bar {
  margin-bottom: 20px;
}

:deep(.el-input-group__append) {
  background-color: #409eff;
  border-color: #409eff;
}

:deep(.el-input-group__append .el-button) {
  color: white;
}
</style>
