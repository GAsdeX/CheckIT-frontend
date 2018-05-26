<template lang="pug">
    .info-box(:class="{danger : danger, info : info, success: success}")
        p(v-html="message")

</template>

<script>
    module.exports = {
        props: {
            message: {
                type: String,
            },
            danger: {
                type: Boolean
            },
            info: {
                type: Boolean
            },
            success: {
                type: Boolean
            }
        }
    }
</script>
