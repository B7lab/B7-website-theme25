<?php

function b7_load_scripts() {
    wp_enqueue_style('bootstrap-css', get_template_directory_uri() . '/libs/css/bootstrap.css', array(), null);
    wp_enqueue_style('lato-font', get_template_directory_uri() . '/css/lato.css', array(), null);
    wp_enqueue_style('b7-style', get_stylesheet_uri());
    wp_enqueue_style('b7-custom-style', get_template_directory_uri() . '/css/styles.css', array(), filemtime(get_template_directory() . '/css/styles.css'), 'all');
    wp_enqueue_script('b7-jquery', get_template_directory_uri() . '/libs/js/jquery.js', array(), '3.7.1', false);
    wp_enqueue_script('b7-matter', get_template_directory_uri() . '/libs/js/matter.js', array(), '3.7.1', true);
    wp_enqueue_script('bootstrap-js', get_template_directory_uri() . '/libs/js/bootstrap.min.js', array('b7-jquery'), '3.7.1', true);
    wp_enqueue_script('b7-custom-js', get_template_directory_uri() . '/js/main.js', array('b7-jquery'), '1.0.0', true);
}

add_action('wp_enqueue_scripts', 'b7_load_scripts');

register_nav_menus(array(
    'b7_main-menu' => 'Main Menu',
    'b7_footer-menu' => 'Footer Menu'
));

add_theme_support( 'editor-style' );