var axios = require('axios');

var API = 'https://checkit-backend.herokuapp.com';

module.exports = {
    namespaced: true,
    state: {
        userName:     null,
        userLastName: null,
        userEmail:    null
    },
    getters: {

    },
    mutations: {

    },
    actions: {
        getLoginStatus: function(context) {

        },
        logIn: function(context, data) {

            console.log(context);
            console.log(data);


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

            // axios.post(API + '/api/signin', data);
            //     .then(function (serverData) {
            //             console.log(serverData);
            //         });
            // axios({
            //     method: 'post',
            //     url: API + '/api/signin',
            //     data: data
            // })
            //     .then(function (serverData) {
            //         console.log(serverData);
            //     });

        }
    }
};

function userLogin() {

}

function userLogout() {

}