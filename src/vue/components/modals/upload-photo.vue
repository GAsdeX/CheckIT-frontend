<template lang="pug">
    .upload-photo-modal.overlay
        div(id="upload-photo-modal").modal-body.upload-photo
            .modal-header
                a(href="index.html").header-logo
                    img(src="img/checkit.svg" alt="CheckIT Logo")
                span.close-modal &times;
            form(id="upload-photo-form").modal-main
                h2.modal-name Upload Photo
                .drop-field
                    p Choose photo
                        br
                        |from storage
                        br
                        |or drop here
                input(type="file").modal-input.file
                button.modal-button(type="submit" name="upload-photo" id="upload-photo-button" form="upload-photo-form") Upload Photo
</template>

<script>
    module.exports = {

    }
</script>