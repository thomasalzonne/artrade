<?php

function mashvp__get_admin_icon()
{
    $encoded_svg = base64_encode('<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"><g fill="#fff" fill-rule="evenodd"><path d="M21.988 2.261c-2.585 2.59-2.13 6.969-3.604 9.347-3.992 6.439-14.99 3.406-17.309 11.466-1.087 3.777.344 8.29 5.276 8.716 3.292.284 5.116-2.174 5.793-3.858 1.239-3.084.45-6.65 2.77-9.785 3.546-4.793 9.52-4.467 12.493-5.934 8.321-4.107 1.63-17.013-5.42-9.952"/><path d="M31.23 23.416c0 4.637-3.752 8.396-8.382 8.396-4.629 0-8.381-3.759-8.381-8.396 0-4.637 3.752-8.396 8.381-8.396 4.63 0 8.382 3.76 8.382 8.396"/></g></svg>');

    return 'data:image/svg+xml;base64,' . $encoded_svg;
}

if (function_exists('acf_add_options_page')) {
    acf_add_options_page([
      'page_title' => 'Paramètres du thème',
      'menu_title' => 'Paramètres',
      'menu_slug'  => 'theme-general-settings',
      'capability' => 'edit_posts',
      'redirect'   => true,
      'position'   => 3,
      'icon_url'   => mashvp__get_admin_icon(),
    ]);

    acf_add_options_sub_page([
      'page_title'  => 'Réglages généraux',
      'menu_title'  => 'Réglages généraux',
      'parent_slug' => 'theme-general-settings',
    ]);
}
