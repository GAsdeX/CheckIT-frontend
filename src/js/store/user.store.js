var axios = require('axios');

var API = 'https://checkit-backend.herokuapp.com';

module.exports = {
    namespaced: true,
    state: {
        // userName:     null,
        // userLastName: null,
        // userEmail:    null,
        user: null
    },
    getters: {
        getLoginStatus: function(state) {
            console.log(state.user);
            return state.user;
        }
    },
    mutations: {
        setLogin: function(state, data) {
            console.log(data);
            state.user = data;
        }
    },
    actions: {
        userAutoLogin: function(context) {
            context.commit('setLogin', getUser());
        },
        logIn: function(context, data) {
            return axios({
                method: 'post',
                url: API + '/api/signin',
                data: {
                    'email':    data.email,
                    'password': data.password
                },
                headers: {
                    "Access-Control-Allow-Origin": "*"
                }
            });
        },
        signUp: function (context, data) {
            return axios({
                method: 'post',
                url: API + '/api/signup',
                data: {
                    'email':    data.email,
                    'password': data.password,
                    'firstName': data.password,
                    'lastName': data.password
                },
                headers: {
                    "Access-Control-Allow-Origin": "*"
                }

            });
        },
        logOut: function (context) {
            userLogout();
            context.commit('setLogin', null);
        },
        setLogin: function(context, data) {
            context.commit('setLogin', data);
            userSetLogin(data);
        }
    }
};

function getUser() {
    return JSON.parse(localStorage.getItem('user'));
}

function userSetLogin(user) {
    localStorage.setItem('user', JSON.stringify(user));
}

function userLogout() {
    console.log(localStorage);

    localStorage.clear('user');
    console.log(localStorage);

}