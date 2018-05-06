<template lang="pug">
    .modal-box
        .modal-header
            button.btn(@click="closeModal") Close modal
        .modal-form
            .input-group-component
                label title
                input()
            .input-group-component
                label title
                input()
            .input-group-component
                label title
                input()
            .input-group-component
                label title
                input()
            .input-group-component
                label title
                input()

        .btn-box
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
            }
        }
    }
</script>