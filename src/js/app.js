'use strict';

var Vue = require('vue/dist/vue.common');



var EventBus = new Vue();
	Object.defineProperties(Vue.prototype, {
    $eventBus: {
        get: function () {
            return EventBus;
        }
    }
});


var app = new Vue({
	el: '#app',
	render: function (h) { return h(require('../vue/index.vue')); },
	router: require('./app.router'),
	store:  require('./app.store'),
	created: function () {

	}
});
