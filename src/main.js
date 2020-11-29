// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api



import '~/assets/style.css'
import '~/assets/blue.css'


import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  head.bodyAttrs = { class: 'blue' }

  Vue.component('Layout', DefaultLayout)
}
