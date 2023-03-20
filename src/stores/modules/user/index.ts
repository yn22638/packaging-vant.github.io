import { defineStore, acceptHMRUpdate } from 'pinia'
const deafultUserInfo = {
  id: '1',
  name: 'matthew',
}
export const useUserStore = defineStore('user', {
  state: () => deafultUserInfo,
})
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
