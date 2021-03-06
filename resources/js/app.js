/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import Gate from './Gate'
import moment from 'moment'
import Swal from 'sweetalert2'
import VueRouter from 'vue-router'
import VueProgressBar from 'vue-progressbar'
import { Form, HasError, AlertError } from 'vform'

Vue.prototype.$gate = new Gate(window.user)


Vue.use(VueRouter)
Vue.use(VueProgressBar, {
    color: 'rgb(143, 255, 199)',
    failedColor: 'red',
    height: '2px'
})

let routes = [
    { path: '/dashboard', component: require('./components/Dashboard.vue').default },
    { path: '/profile', component: require('./components/Profile.vue').default },
    { path: '/developer', component: require('./components/Developer.vue').default },
    { path: '/users', component: require('./components/Users.vue').default },
    { path: "*", component: require('./components/404.vue').default }

]

const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
})

// Vue.filter('upText', (text) => text.toUpperCase() )
Vue.filter('upText', (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1)
})

Vue.filter('formatDateId', (date) => {
    moment.locale('id')
    return moment(date).format('Do MMMM YYYY') 
})
  
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
Vue.component('example-component', require('./components/ExampleComponent.vue').default);

Vue.component('pagination', require('laravel-vue-pagination'));

// passport components
Vue.component(
    'passport-clients',
    require('./components/passport/Clients.vue').default
);

Vue.component(
    'passport-authorized-clients',
    require('./components/passport/AuthorizedClients.vue').default
);

Vue.component(
    'passport-personal-access-tokens',
    require('./components/passport/PersonalAccessTokens.vue').default
);

Vue.component(
    'not-found',
    require('./components/404.vue').default
);

window.Form = Form
window.Swal = Swal
window.Fire = new Vue() // optioonal Fire.$on , jka tidak di deklarasi bisa dipanggil dengan this.$emit / $on

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
});
window.Toast = Toast

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router,
    data: {
        search: ''
    },
    methods: {
        // searchit () {
        //     console.log('searching...')
        //     Fire.$emit('Searching')
        // }
        searchit: _.debounce(() => {
            Fire.$emit('Searching')
        }, 700),

        printme () {
            window.print()
        }
    }
});
