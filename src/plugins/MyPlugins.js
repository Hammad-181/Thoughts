import toaster from '@/components/Toaster.vue'
import notification from '@/components/Notification.vue'

export default {
  install: (app, options) => {
    app.component('toaster', toaster)
    app.component('notification', notification)
  }
}