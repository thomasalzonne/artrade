<?php

function mashvp__remove_menu_items()
{
    global $menu;

    $restricted = [
        __('Comments'),
        __('Tools'),
        __('Plugins'),
        __('Media'),
        __('Appearance'),
        __('Settings')
    ];

    end($menu);

    while (prev($menu)) {
        $value = explode(' ', $menu[key($menu)][0]);

        if (in_array($value[0] !== null ? $value[0] : '', $restricted)) {
            unset($menu[key($menu)]);
        }
    }
}

function mashvp__admin_add_js()
{
    if (is_admin()) {
        global $pagenow;

        if ($pagenow === 'users.php') {
            echo '<script data-theme="sps">';
            @include __DIR__ . '/js/admin-security-warning.js';
            echo '</script>';
        }

        // if ($pagenow === 'post.php' || $pagenow === 'post-new.php') {
        //     echo '<script async defer data-theme="sps">';
        //     @include __DIR__ . '/js/page-model-updater.js';
        //     echo '</script>';
        // }
    }
}

add_action('init', 'mashvp__do_admin_functions', 10);
function mashvp__do_admin_functions()
{
    if (is_admin()) {
        if (is_user_logged_in()) {
            $user_login = get_userdata(get_current_user_id())->data->user_login;

            if (!in_array($user_login, ['mashvp'])) {
                // Remove comments from BO
                add_action('admin_menu', 'mashvp__remove_menu_items');

                add_filter('acf/settings/show_admin', '__return_false');

                $role = get_role('administrator');
                $role->remove_cap('delete_pages');
                $role->remove_cap('delete_others_pages');
            }
        }

        add_action('admin_footer', 'mashvp__admin_add_js');
    }
}
