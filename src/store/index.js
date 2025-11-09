import { createStore } from 'vuex'

export default createStore({
  state: {
    contacts: [],
    loading: false,
    error: null
  },
  mutations: {
    SET_LOADING(state, loading) {
      state.loading = loading
    },
    SET_CONTACTS(state, contacts) {
      state.contacts = contacts
    },
    ADD_CONTACT(state, contact) {
      state.contacts.push(contact)
    },
    UPDATE_CONTACT(state, updatedContact) {
      const index = state.contacts.findIndex(c => c.id === updatedContact.id)
      if (index !== -1) {
        state.contacts.splice(index, 1, updatedContact)
      }
    },
    DELETE_CONTACT(state, contactId) {
      state.contacts = state.contacts.filter(c => c.id !== contactId)
    },
    SET_ERROR(state, error) {
      state.error = error
    },
    CLEAR_ERROR(state) {
      state.error = null
    }
  },
  actions: {
    async fetchContacts({ commit }) {
      commit('SET_LOADING', true)
      commit('CLEAR_ERROR')
      try {
        const response = await fetch('http://localhost:8081/api/contacts')
        if (!response.ok) throw new Error('获取联系人列表失败')
        const contacts = await response.json()
        commit('SET_CONTACTS', contacts)
      } catch (error) {
        commit('SET_ERROR', error.message)
      } finally {
        commit('SET_LOADING', false)
      }
    },
    async createContact({ commit }, contactData) {
      commit('SET_LOADING', true)
      commit('CLEAR_ERROR')
      try {
        const response = await fetch('http://localhost:8081/api/contacts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(contactData)
        })
        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.error || '创建联系人失败')
        }
        const newContact = await response.json()
        commit('ADD_CONTACT', newContact)
        return newContact
      } catch (error) {
        commit('SET_ERROR', error.message)
        throw error
      } finally {
        commit('SET_LOADING', false)
      }
    },
    async updateContact({ commit }, { id, contactData }) {
      commit('SET_LOADING', true)
      commit('CLEAR_ERROR')
      try {
        const response = await fetch(`http://localhost:8081/api/contacts/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(contactData)
        })
        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.error || '更新联系人失败')
        }
        const updatedContact = await response.json()
        commit('UPDATE_CONTACT', updatedContact)
        return updatedContact
      } catch (error) {
        commit('SET_ERROR', error.message)
        throw error
      } finally {
        commit('SET_LOADING', false)
      }
    },
    async deleteContact({ commit }, contactId) {
      commit('SET_LOADING', true)
      commit('CLEAR_ERROR')
      try {
        const response = await fetch(`http://localhost:8081/api/contacts/${contactId}`, {
          method: 'DELETE'
        })
        if (!response.ok) throw new Error('删除联系人失败')
        commit('DELETE_CONTACT', contactId)
      } catch (error) {
        commit('SET_ERROR', error.message)
        throw error
      } finally {
        commit('SET_LOADING', false)
      }
    },
    async searchContacts({ commit }, keyword) {
      commit('SET_LOADING', true)
      commit('CLEAR_ERROR')
      try {
        const response = await fetch(`http://localhost:8081/api/contacts/search?keyword=${encodeURIComponent(keyword)}`)
        if (!response.ok) throw new Error('搜索联系人失败')
        const contacts = await response.json()
        commit('SET_CONTACTS', contacts)
      } catch (error) {
        commit('SET_ERROR', error.message)
      } finally {
        commit('SET_LOADING', false)
      }
    }
  },
  getters: {
    contacts: state => state.contacts,
    loading: state => state.loading,
    error: state => state.error,
    contactById: state => id => state.contacts.find(contact => contact.id === id)
  }
})
