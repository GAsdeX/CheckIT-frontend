<template lang="pug">
    .site-content
        .contact-box
            .container
                h1.section-title Contacts
                .row.top
                    .col-md-4.contact-box-item.phone
                        .icon
                        .description
                            .description-title Phone
                            a(href="tel:+380935684562").description-text +380&nbsp;93&nbsp;56&nbsp;84&nbsp;562
                            a(href="tel:+380675684562").description-text +380&nbsp;67&nbsp;56&nbsp;84&nbsp;562
                    .col-md-4.contact-box-item.mail
                        .icon
                        .description
                            .description-title Email
                            a(href="mailto:checkit.info@gmail.com").description-text checkit.info@gmail.com
                    .col-md-4.contact-box-item.address
                        .icon
                        .description
                            .description-title Address
                            p.description-text
                                | Marazliivska str. 4,
                                br
                                | Odesa, Ukraine
                .row.bottom.map
                    .col-12
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2747.2668180703554!2d30.74821681590478!3d46.4830288791261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c631a1b5c22d2b%3A0x7de6892cd615825c!2z0LLRg9C70LjRhtGPINCc0LDRgNCw0LfQu9GW0ZfQstGB0YzQutCwLCA0LCDQntC00LXRgdCwLCDQntC00LXRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgNjUwMDA!5e0!3m2!1suk!2sua!4v1526229112873" width="100%" height="420" frameborder="0" style="border:0" allowfullscreen></iframe>
</template>

<script>
    module.exports = {

    };
</script>
