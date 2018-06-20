<template lang="pug">
    .site-content
        .legal-page-section
            .container
                .row
                    .offset-1.col-10.legal-page-box
                        .legal-page-wrapper(v-if="cur_doc == 'terms' ")
                            terms()
                        .legal-page-wrapper(v-else-if="cur_doc == 'policy' ")
                            policy()
</template>

<script>
    module.exports = {
        computed: {
            cur_doc: function(){
             return this.$route.name
            }
        },
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
