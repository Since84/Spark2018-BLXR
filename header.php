<?php
wp_head();
?>
<meta name="viewport" content="initial-scale = 1.0,maximum-scale = 1.0" />
<?php
// Navigation
$context = Timber::get_context();
$context['site_logo'] = get_field('logo', 'option');
$context['menu'] = new Timber\Menu('main-nav');
$context['social'] = get_field('social_accounts', 'option');

Timber::render('/view/nav/basic.html.twig', $context);
