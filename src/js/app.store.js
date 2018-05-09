'use strict';

var Vue  = require('vue/dist/vue.common');
var Vuex = require('vuex');

Vue.use(Vuex);

module.exports = new Vuex.Store({
	modules: {
		user: require('./store/user.store')
	},
	actions: {
		getData: function (context) {
            console.log(22);
        }
	}
});
