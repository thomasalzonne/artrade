<?php

register_nav_menus([
    'main-nav'   => 'Menu principal',
    'footer-nav' => 'Pied de page'
]);

add_filter('nav_menu_link_attributes', 'mashvp__add_menu_link_attributes', 1, 3);
function mashvp__add_menu_link_attributes($atts, $item, $args)
{
    if (property_exists($args, 'link_class')) {
        $atts['class'] = $args->link_class;
    }

    if (property_exists($args, 'link_target')) {
        $atts['data-target'] = $args->link_target;
    }

    if (property_exists($args, 'link_action')) {
        $atts['data-action'] = $args->link_action;
    }

    if (property_exists($args, 'link_transition')) {
        $atts['data-transition'] = $args->link_transition;
    }

    return $atts;
}
