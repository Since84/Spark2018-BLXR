<?php
get_header();

$context = Timber::get_context();
$context['page'] = new TimberPost();
$context['contact_form'] = do_shortcode( "[contact-form-7 id='231' title='Contact Us']");

Timber::render('view/page/contact.html.twig', $context);

get_footer();