<?php

$footerContext = array();
$footerContext['social'] = get_field('social_accounts', 'option');
$footerContext['content'] = get_field('footer_text', 'option');
$footerContext['menu'] = new Timber\Menu('footer-nav');
$footerContext['contact_form'] = do_shortcode( "[contact-form-7 id='231']");

Timber::render("/view/components/footer.html.twig", $footerContext);

wp_footer();