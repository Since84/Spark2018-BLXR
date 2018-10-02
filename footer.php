<?php 
$newsletterContext = array();
$newsletterContext['form'] = Timber::get_widgets( 'newsletter-form' );
$newsletterContext['content'] = get_field('newsletter_heading', 'option');

Timber::render("/view/content/newsletter_signup.html.twig", $newsletterContext);


$footerContext = array();
$footerContext['social'] = get_field('social_accounts', 'option');
$footerContext['content'] = get_field('footer_text', 'option');

Timber::render("/view/components/footer.html.twig", $footerContext);

wp_footer();