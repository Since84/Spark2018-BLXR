<?php
get_header();

$context = Timber::get_context();
$context['page'] = new TimberPost();

Timber::render('view/template/position.html.twig', $context);

get_footer();