<?php
get_header();

$context = Timber::get_context();
$context['page'] = new TimberPost();

Timber::render('view/page/resources.html.twig', $context);

get_footer();