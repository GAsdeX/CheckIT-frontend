'use strict';

var Vue  = require('vue/dist/vue.common');
var Vuex = require('vuex');

Vue.use(Vuex);

module.exports = new Vuex.Store({
	modules: {
		module: require('./store/module.store')
	},
	actions: {
		getData: function (context) {
            console.log(22);
        }
	}
});
