<?php
// var_dump('here');
get_header();

$context = Timber::get_context();
$context['page'] = new TimberPost();
$context['contact_form'] = do_shortcode( "[contact-form-7 id='159' title='Contact Us']");


if ( $context['page']->post_name !== "team" ){
	$headingContext = array(
		"layout"=> array( "heading"=>$context['page'] ),
		"class" => "page-heading"
	);
	Timber::render('view/content/section_heading.html.twig', $headingContext);
}


Timber::render('view/page/contact.html.twig', $context);

get_footer();