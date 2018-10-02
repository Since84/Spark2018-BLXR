<?php 
	// Enqueue Styles and Scripts
	function spark_base_enqueue() {
		wp_enqueue_style( 'spark_fontawesome_css', get_template_directory_uri()."/style/fontawesome/css/fontawesome-all.min.css" );
		wp_enqueue_style( 'spark_base_css', get_stylesheet_directory_uri()."/style.css" );
		
		wp_enqueue_script( 'jquery', $in_footer = true );
		wp_enqueue_script( 'spark_base_js', get_stylesheet_directory_uri()."/js/app.js", $in_footer = true );
	}

	add_action( 'wp_enqueue_scripts', 'spark_base_enqueue' );


	// Our custom post type function
	function create_posttype() {
	 
	    register_post_type( 'jobs',
	    // CPT Options
	        array(
	            'labels' => array(
	                'name' => __( 'Jobs' ),
	                'singular_name' => __( 'Position' )
	            ),
	            'public' => true,
	            'has_archive' => true,
	            'rewrite' => array('slug' => 'jobs'),
	        )
	    );
	}
	// Hooking up our function to theme setup
	add_action( 'init', 'create_posttype' );


	//Newsletter Widget
	if ( function_exists('register_sidebar') ) {
		register_sidebar(array(
			'name' => 'Newsletter Form',
			'id' => 'newsletter-form',
			'description' => 'Sendgrid form widget',
			'before_widget' => '<div id="%1$s" class="widget %2$s">',
			'after_widget' => '</div>',
			'before_title' => '<h2 class="widgettitle">',
			'after_title' => '</h2>',
		));
	}

?>