<template lang="pug">
    .modal-box
        .modal-header
            .top-side
                router-link(@click.native="closeModal", :to="{name: 'home'}").header-logo Checkit
                button.btn.close-modal(@click="closeModal") &times;
            .bottom-side
                h2.modal-name Notification
        .modal-form
            p.notification-text This emais is incorrect. Please, send valid email.
            .btn-box
                button(type="button" id="close-notification" @click="closeModal").modal-button.button-blue OK
</template>

<script>
    module.exports = {
        data: function(){
            return {
                newPassword: "",
                confirmNewPassword: ""
            }
        },
        methods: {
            closeModal: function(){
                console.log(22);
                this.$eventBus.$emit('callModal', {action: 'close'});
            }
        }
    }
</script>