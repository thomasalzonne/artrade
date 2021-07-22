<?php

$MASHVP__CSS_PATH = get_template_directory() . '/style.css';
$MASHVP__JS_PATH = get_template_directory() . '/js/index.min.js';

define('MASHVP__CSS_URI', get_template_directory_uri() . '/style.css');
define('MASHVP__JS_URI', get_template_directory_uri() . '/js/index.min.js');

define('MASHVP__STYLESHEET_VERSION', @filemtime($MASHVP__CSS_PATH));
define('MASHVP__JAVASCRIPTS_VERSION', @filemtime($MASHVP__JS_PATH));

add_filter('show_admin_bar', '__return_false');
add_filter('sanitize_file_name', 'remove_accents');

add_theme_support('menus');
add_theme_support('post-thumbnails');

add_post_type_support('page', 'excerpt');

remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');

add_action('admin_menu', 'mashvp__remove_admin_menus');
function mashvp__remove_admin_menus()
{
    remove_menu_page('edit-comments.php');
}

add_action('init', 'mashvp__remove_comment_support', 100);
function mashvp__remove_comment_support()
{
    remove_post_type_support('post', 'comments');
    remove_post_type_support('page', 'comments');
}

add_action('init', 'mashvp__enqueue_assets');
function mashvp__enqueue_assets()
{
    if (!is_admin()) {
        wp_enqueue_style(
            'mashvp-theme',
            MASHVP__CSS_URI,
            [],
            MASHVP__STYLESHEET_VERSION
        );

        wp_enqueue_script(
            'mashvp-theme',
            MASHVP__JS_URI,
            [],
            MASHVP__JAVASCRIPTS_VERSION,
            true
        );
    } else {
        wp_enqueue_style(
            'mashvp-theme',
            get_template_directory_uri() . '/backend/style.css',
        );
    }
}

add_filter('excerpt_length', 'mashvp__excerpt_length', 999);
function mashvp__excerpt_length($length)
{
    $length = 25;

    return $length;
}

add_filter('excerpt_more', 'new_excerpt_more');
function new_excerpt_more($more)
{
    return '…';
}

add_filter('admin_footer_text', 'mashvp__replace_admin_footer_content');
function mashvp__replace_admin_footer_content()
{
    echo <<<HTML
        <span id="footer-thankyou">Développé par <a href="http://mashvp.com/" target="_blank">Mashvp</a></span>
    HTML;
}
