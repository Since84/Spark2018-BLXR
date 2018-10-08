<?php
// var_dump('here');
get_header();

$context = Timber::get_context();
$context['page'] = new TimberPost();


Timber::render('view/page/page.html.twig', $context);

get_footer();