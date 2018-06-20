<template lang="pug">
    .site-content
        .legal-page-section
            .container
                .row
                    .offset-1.col-10.legal-page-box
                        //- terms()
                        policy()

</template>

<script>
    module.exports = {
	    created: function() {

        },
        mounted: function() {

        },
	    components: {
            'terms': require('../components/legal/terms.vue'),
            'policy': require('../components/legal/policy.vue')
        }
	};
</script>
