<template lang="pug">
    .modal-box
        .modal-header
            .top-side
                router-link(@click.native="closeModal", :to="{name: 'home'}").header-logo Checkit
                button.btn.close-modal(@click="closeModal") &times;
            .bottom-side
                h2.modal-name Forgot Password
        form.modal-form(v-on:submit="submitForm($event)")
            .input-group-component
                label(for="email") Your Email
                input(type="email" id="email" placeholder="Email" required).modal-input
            .btn-box
                button(type="submit" id="save-password-changes").modal-button.button-blue Reset Password
</template>

<script>
    module.exports = {
        data: function(){
            return {

            }
        },
        methods: {
            closeModal: function(){
                console.log(22);
                this.$eventBus.$emit('callModal', {action: 'close'});
            },
            submitForm: function(e) {
                e.preventDefault();
                var data = {
                    currentPassword: this.currentPassword,
                    newPassword: this.newPassword,
                    confirmNewPassword: this.confirmNewPassword
                }
                console.log(data);
            }
        }
    }
</script>