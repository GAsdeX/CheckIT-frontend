<template>
	<div class="global-site-wrapper">
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
        components: {
            'site-header': require('../vue/components/site-header.vue'),
            'site-footer': require('../vue/components/site-footer.vue'),
            'modal-window': require('../vue/components/modal-window.vue')
        }
    }
</script>
