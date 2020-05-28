import firebase from 'firebase/app';
import Vue from 'vue';
import Vuelidate from 'vuelidate';
import dateFilter from '@/filters/date.filter';
import currencyFilter from '@/filters/currency.filter';
import messagePlugin from '@/utils/message.plugin';
import Loader from '@/components/app/Loader.vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import 'materialize-css/dist/js/materialize.min';
import 'firebase/auth';
import 'firebase/database';

Vue.config.productionTip = false;
Vue.use(Vuelidate);
Vue.use(messagePlugin);
Vue.filter('dateFilter', dateFilter);
Vue.filter('currencyFilter', currencyFilter);
Vue.component('Loader', Loader);

firebase.initializeApp({
  apiKey: 'AIzaSyDdkdQY6MniGAFpvvVcBK-nw_reHPuPy2Q',
  authDomain: 'crm-mastape.firebaseapp.com',
  databaseURL: 'https://crm-mastape.firebaseio.com',
  projectId: 'crm-mastape',
  storageBucket: 'crm-mastape.appspot.com',
  messagingSenderId: '274975616421',
  appId: '1:274975616421:web:7f8ca3ac2d9f3221b50c4c',
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount('#app');
  }
});
