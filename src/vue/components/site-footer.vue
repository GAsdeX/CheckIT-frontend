<template lang="pug">
    footer.site-footer
        .footer-section
            .hi-row.row
                .container
                    .nav-menu
                        router-link(:to="{name: 'index'}").logo Checkit
                        .sub-links
                            router-link(:to="{name: 'catalog'}").sub-links-item projects
                            router-link(:to="{name: 'about'}").sub-links-item about
                            router-link(:to="{name: 'faq'}").sub-links-item faq
                            router-link(:to="{name: 'contacts'}").sub-links-item contacts
                    form(id="footer-form").subscribe-form
                        input(type="email" placeholder="Your Email" required)
                        input(type="submit" value="Subscribe")
            .low-row.row
                .container
                    .documents-wrapper
                        router-link(:to="{name: 'terms'}").terms Terms of Use
                        router-link(:to="{name: 'policy'}").policy Privacy Policy
                    p.copyrights &copy;&nbsp;IT School 2018. All rights Reserved
</template>

<script>
    module.exports = {
        name: "site-footer"
    }
</script>
