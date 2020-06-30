// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import routerOptions from "./router";
import resource from "vue-resource";
import mixin from "./js/mixin";
import Router from "vue-router";

import echarts from 'echarts'
Vue.prototype.$echarts = echarts;

import 'monaco-editor/esm/vs/editor/editor.all.js';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.main.js';
Vue.prototype.monaco = monaco;
//import './styles/iconfont.css';

Vue.use(resource);
Vue.config.productionTip = false;
Vue.mixin(mixin);

Vue.use(Router);

let router = new Router(routerOptions);

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
});

new Vue({
    el: "#app",
    router: router,
    template: "<App/>",
    components: {
        App
    }
});
