'use strict';

var Vue = require('vue/dist/vue.common');

var app = new Vue({
	el: '#app',
	render: function (h) { return h(require('../vue/index.vue')); },
	router: require('./app.router'),
	store:  require('./app.store'),
	created: function () {

	}
});
