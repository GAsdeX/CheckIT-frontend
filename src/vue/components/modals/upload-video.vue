<template lang="pug">
    .modal-box
        .modal-header
            .top-side
                router-link(@click.native="closeModal", :to="{name: 'home'}").header-logo Checkit
                button.btn.close-modal(@click="closeModal") &times;
            .bottom-side
                h2.modal-name Upload Video
        .modal-form(v-on:submit="submitForm($event)")
            form(id="upload-video-form").modal-main
                .drop-field
                    p Choose video
                        br
                        |from a storage
                        br
                        |or drop here
                .input-group-component
                    input(type="file" required).modal-input.file
                button.modal-button.button-blue(type="submit" name="upload-video" id="upload-video-button" form="upload-video-form") Upload Video
</template>

<script>
    module.exports = {
        data: function(){
            return {

            }
        },
        methods: {
            closeModal: function () {
                console.log(22);
                this.$eventBus.$emit('callModal', {action: 'close'});
            }
        }
    }
</script>