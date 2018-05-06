<template lang="pug">
    .modal-wrapper
        component(v-for="modalBox in modalBoxes" :is="modalBox.component" v-if="currentComponent === modalBox.slug")

</template>

<script>
    var signIn = require('./modals/sign-in.vue');
    var signUp = require('./modals/sign-up.vue');
    var uploadPhoto = require('./modals/upload-photo.vue');
    var changePassword = require('./modals/change-password.vue');
    var forgotPassword = require('./modals/forgot-password.vue');

    module.exports = {
        created() {
            this.$eventBus.$on('callModal', this.onReceive);
        },
        data: function() {
            return {
                currentComponent: null,
                modalBoxes: [
                    {
                        slug: 'sign-in',
                        component: signIn
                    },
                    {
                        slug: 'sign-up',
                        component: signUp
                    },
                    {
                        slug: 'upload-photo',
                        component: uploadPhoto
                    },
                    {
                        slug: 'change-password',
                        component: changePassword
                    },
                    {
                        slug: 'forgot-password',
                        component: forgotPassword
                    }
                ]
            }
        },
        methods: {
            onReceive(data) {
                console.log(data);
                this.currentComponent = data.action;
            }
        }
    }
</script>