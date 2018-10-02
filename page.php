<?php
// var_dump('here');
get_header();

$context = Timber::get_context();
$context['page'] = new TimberPost();


if ( $context['page']->post_name !== "team" ){
	$headingContext = array(
		"layout"=> array( "heading"=>$context['page'] ),
		"class" => "page-heading"
	);
	Timber::render('view/content/section_heading.html.twig', $headingContext);
}


Timber::render('view/page/page.html.twig', $context);

get_footer();