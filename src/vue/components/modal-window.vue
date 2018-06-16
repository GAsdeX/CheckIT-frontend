<template lang="pug">
    .modal-wrapper(:class="{active: isActiveModal}" @click="closeModal($event)")
        component(v-for="modalBox in modalBoxes" :is="modalBox.component" v-if="currentComponent === modalBox.slug")

</template>

<script>
    var signIn = require('./modals/sign-in.vue');
    var signUp = require('./modals/sign-up.vue');
    var uploadPhoto = require('./modals/upload-photo.vue');
    var changePassword = require('./modals/change-password.vue');
    var forgotPassword = require('./modals/forgot-password.vue');
    var resetPassword = require('./modals/reset-password.vue');
    var notificationWindow = require('./modals/notification-window.vue');
    var deleteIdea = require('./modals/delete-idea.vue');

    module.exports = {
        created() {
            this.$eventBus.$on('callModal', this.onReceive);
        },
        data: function() {
            return {
                isActiveModal: false,
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
                    },
                    {
                        slug: 'reset-password',
                        component: resetPassword
                    },
                    {
                        slug: 'notification-window',
                        component: notificationWindow
                    },
                    {
                        slug: 'delete-idea',
                        component: deleteIdea
                    }
                ]
            }
        },
        methods: {
            closeModal(e) {
                var clickOnBox = e.target.closest('.modal-wrapper .modal-box');

                if (!clickOnBox) {

                    this.destroyModal();
                }
            },
            onReceive(data) {
                if (data && data.action && data.action === 'close') {
                    this.destroyModal();
                } else {
                    console.log(data);
                    this.currentComponent = data.action;
                    this.isActiveModal = true;
                }
            },
            destroyModal: function() {
                var that = this;
                that.isActiveModal = false;

                setTimeout(function() {
                    that.currentComponent = null;
                }, 300);
            }
        }
    }
</script>