<template lang="pug">
    .site-content
        .no-found-section
            .container
                h1.section-title.no-found-title
                    | Sorry, we couldn’t find anything on &#34;
                    span.no-found-name creative
                    | &#34;
                button.button-blue.no-found-description: router-link(:to="{name: 'catalog'}") go to ideas

</template>

<script>
    module.exports =  {

    }
</script>