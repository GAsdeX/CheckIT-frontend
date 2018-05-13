<template lang="pug">
    .modal-box
        .modal-header
            .top-side
                router-link(@click.native="closeModal", :to="{name: 'home'}").header-logo Checkit
                button.btn.close-modal(@click="closeModal") &times;
            .bottom-side
                h2.modal-name Sign Up
        form.modal-form(v-on:submit="submitForm($event)")
            .input-group-component
                //-label(for="first-name") First Name
                input(type="text" id="first-name" placeholder="First Name" required).modal-input
            .input-group-component
                //-label(for="last-name") Last Name
                input(type="text" id="last-name" placeholder="Last Name" required).modal-input
            .input-group-component
                //-label(for="email") Email
                input(type="email" id="email" placeholder="Email" required).modal-input
            .input-group-component
                //-label(for="password") Password
                input(type="password" id="password" placeholder="Password, 8+ symbols" pattern=".{8,}" required).modal-input
                img(src="img/icons/eye-off.png" alt="Show Password Image" class="show-password-icon hide active" id="password-hide")
                img(src="img/icons/eye-on.png" alt="Show Password Image" class="show-password-icon show" id="password-show")
            .btn-box
                button(type="submit" id="sign-up-button").modal-button.button-blue Sign Up
            .sign-in-wrapper
                p.sign-in Have an account?
                button(type="button" id="sign-in-button" @click="closeModal, callModal('sign-in')").sub-button Sign in
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
            callModal: function(component) {
                this.$eventBus.$emit("callModal", {action: component})
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