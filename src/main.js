import DefaultLayout from '~/layouts/Default.vue'

// bootstrap
import BootstrapVue from 'bootstrap-vue'

//global stylesheet
import '~/assets/style/styles.scss'

export default function (Vue, { head, appOptions }) {
  Vue.component('Layout', DefaultLayout)
  Vue.use(BootstrapVue)
  head.link.push({
    rel: 'stylesheet',
    href: encodeURI('https://fonts.googleapis.com/css?family=Muli:400,400i,700|Corben:700&display=swap')
  })

  // // Wrap the router-view with a transition tag.
  // // You could do the same with keep-alive etc.
  // appOptions.render = h =>
  //   h(
  //     "transition",
  //     { props: { name: "fade" } },
  //     // The router-view component as defined in 0.5.4
  //     [h("router-view", { attrs: { id: "app" } })]
  //   );
}
