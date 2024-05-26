import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
import './global.scss';
import '@fortawesome/fontawesome-free/css/all.css';
import BootstrapVue3 from 'bootstrap-vue-3';

// Import FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Add icons to the library
library.add(faUser, faSignOutAlt);

const app = createApp(App);

app.use(router);
app.use(BootstrapVue3);

// Register the FontAwesomeIcon component globally
app.component('font-awesome-icon', FontAwesomeIcon);

// Global method for currency formatting with euro sign
app.config.globalProperties.$currencyWithSign = function (value) {
    if (typeof value !== "number") {
        return value;
    }
    return new Intl.NumberFormat('nl-NL', {
        style: 'currency',
        currency: 'EUR',
        currencyDisplay: 'symbol',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(value);
};

// Global method for currency formatting without euro sign
app.config.globalProperties.$currencyWithoutSign = function (value) {
    if (typeof value !== "number") {
        return value;
    }
    return new Intl.NumberFormat('nl-NL', {
        style: 'decimal',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(value);
};

app.mount('#app');
