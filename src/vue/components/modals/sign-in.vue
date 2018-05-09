<template lang="pug">
    .modal-box
        .modal-header
            .top-side
                router-link(@click.native="closeModal", :to="{name: 'home'}").header-logo Checkit
                button.btn.close-modal(@click="closeModal") &times;
            .bottom-side
                h2.modal-name Sign In
        form.modal-form(v-on:submit="submitForm($event)")
            .input-group-component
                label(for="email") Email
                input(type="email" v-model="email" id="email" placeholder="Email" required).modal-input
            .input-group-component
                label(for="password") Password
                input(type="password" v-model="password" id="password" placeholder="Password" required).modal-input
                img(src="img/icons/eye-off.png" alt="Show Password Image" class="show-password-icon hide active" id="password-hide")
                img(src="img/icons/eye-on.png" alt="Show Password Image" class="show-password-icon show" id="password-show")
            button(@click.prevent.self="closeModal, callModal('forgot-password')").forgot-password Forgot password?
            .btn-box
                button(type="submit" id="sign-in-button").modal-button.button-blue Sign In
            .sign-up-wrapper
                p.sign-up Don't have an account?
                button(type="button" id="sign-up-button" @click="closeModal, callModal('sign-up')").sub-button Sign up
</template>

<script>
    module.exports = {
        data: function(){
            return {
                email:    '',
                password: ''
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
                    email:    this.email,
                    password: this.password
                };

                this.$store.dispatch('user/logIn', data);
            }
        }
    }
</script>