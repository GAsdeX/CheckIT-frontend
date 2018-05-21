<template>
	<div class="global-site-wrapper" v-on:click="removeActive">
        <modal-window></modal-window>
        <div class="site-top-content">
            <site-header></site-header>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
        <site-footer></site-footer>
    </div>

</template>

<script>
    module.exports = {
        methods:    {
            removeActive: function() {
                if (!(event.path[0].classList.contains('delete-idea') || event.path[0].classList.contains('more-button'))) {
                    for (var i = 0; i < document.querySelectorAll('.editor-list').length; i++) {
                        document.querySelectorAll('.editor-list')[i].classList.remove('active');
                    }
                }
            }
        },
        components: {
            'site-header': require('../vue/components/site-header.vue'),
            'site-footer': require('../vue/components/site-footer.vue'),
            'modal-window': require('../vue/components/modal-window.vue')
        }
    }
</script>
