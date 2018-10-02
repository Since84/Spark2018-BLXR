<?php
get_header();

$context = Timber::get_context();
$context['page'] = new TimberPost();

Timber::render('view/template/article.html.twig', $context);

get_footer();