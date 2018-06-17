'use strict';

var Vue       = require('vue/dist/vue.common');
var VueRouter = require('vue-router');

Vue.use(VueRouter);

var routes = [
	{
		name: 'home',
		path: '/',
		component: require('../vue/pages/home.vue')
	},
    {
        name: 'catalog',
        path: '/catalog',
        component: require('../vue/pages/catalog.vue')
    },
    {
        name: 'faq',
        path: '/faq',
        component: require('../vue/pages/faq.vue')
    },
    {
        name: 'about',
        path: '/about',
        component: require('../vue/pages/about.vue')
    },
    {
        name: 'profile',
        path: '/profile',
        component: require('../vue/pages/profile.vue')
    },
    {
        name: 'contacts',
        path: '/contacts',
        component: require('../vue/pages/contacts.vue')
    },
    {
        name: 'author-ideas',
        path: '/author-ideas',
        component: require('../vue/pages/author-ideas.vue')
    },
    {
        name: 'author',
        path: '/author',
        component: require('../vue/pages/author.vue')
    },
    {
        name: 'create-idea',
        path: '/create-idea',
        component: require('../vue/pages/create-idea.vue')
    },
    {
        name: 'not-found',
        path: '/404',
        component: require('../vue/pages/404.vue')
    },
    {   path: '*',
        redirect: '/404'
    }
];

module.exports = new VueRouter({
	mode: 'history',
	routes: routes,
	scrollBehavior: function () {
		return {x: 0, y: 0};
	}
});
