<template lang="pug">
    .site-content
        .legal-page-section
            .container
                .row
                    .offset-1.col-10.legal-page-box
                        div(v-if="cur_doc == 'terms' ")
                            terms()
                        div(v-else-if="cur_doc == 'policy' ")
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
	        console.log( '___' )
	        console.log( this.$route.name )
        },
        mounted: function() {

        },
	    components: {
            'terms': require('../components/legal/terms.vue'),
            'policy': require('../components/legal/policy.vue')
        }
	};
</script>
