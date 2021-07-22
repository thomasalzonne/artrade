<?php

if (!function_exists('mashvp_get_page_description')) {
    function mashvp_get_page_description()
    {
        if (is_front_page()) {
            return get_bloginfo('description');
        }

        if (is_404()) {
            return __('Page non trouvée', THEME_TEXT_DOMAIN);
        }

        if (is_home()) {
            return single_post_title('', false);
        }

        if (is_category() || is_tax()) {
            return single_term_title('', false);
        }

        return get_the_title();
    }
}

if (!function_exists('mashvp_get_title')) {
    function mashvp_get_title()
    {
        return implode(
            ' | ',
            [
                mashvp_get_page_description(),
                get_bloginfo('title'),
            ]
        );
    }
}

if (!function_exists('mashvp_og_tags')) {
    function mashvp_og_tags()
    {
        $title = mashvp_get_title();
        $excerpt = get_the_excerpt();
        $permalink = get_permalink();

        $thumb = get_post_thumbnail_id();
        $thumb_url = get_the_post_thumbnail_url(null, 'large');
        $thumb_alt = get_post_meta($thumb, '_wp_attachment_image_alt', true);

        echo <<<HTML
            <meta property="og:title" content="$title" />
            <meta property="og:description" content="$excerpt" />
            <meta property="og:url" content="$permalink" />
            <meta property="og:image" content="$thumb_url" />
            <meta property="og:image:alt" content="$thumb_alt" />
        HTML;
    }
}

if (!function_exists('array_safe_get')) {
    function array_safe_get($array, ...$keys)
    {
        $current = $array;

        foreach ($keys as $key) {
            if (isset($current) && isset($current[$key])) {
                $current = $current[$key];
            } else {
                return null;
            }
        }

        return $current;
    }
}

if (!function_exists('http_param_get')) {
    function http_param_get($key, $default = null)
    {
        if (isset($_GET) && isset($_GET[$key])) {
            return $_GET[$key];
        }

        return $default;
    }
}

if (!function_exists('http_param_post')) {
    function http_param_post($key, $default = null)
    {
        if (isset($_POST) && isset($_POST[$key])) {
            return $_POST[$key];
        }

        return $default;
    }
}

if (!function_exists('file_uri')) {
    function file_uri($name, $version = '')
    {
        $uri = get_template_directory_uri() . $name;

        if ($version) {
            $version = "?v=$version";
            $uri .= $version;
        }

        return $uri;
    }
}

if (!function_exists('asset_uri')) {
    function asset_uri($name, $version = '')
    {
        return file_uri("/assets/$name", $version);
    }
}

if (!function_exists('file_path')) {
    function file_path($name)
    {
        return get_template_directory() . $name;
    }
}

if (!function_exists('asset_path')) {
    function asset_path($name)
    {
        return file_path("/assets/$name");
    }
}

if (!function_exists('include_asset')) {
    function include_asset($name)
    {
        include asset_path($name);
    }
}

if (!function_exists('get_media_fullpath')) {
    function get_media_fullpath($media_url) {
        $site_url = get_site_url();
        $relative_media_url = str_replace("$site_url/wp-content/uploads", '', $media_url);
        $base_upload_dir = wp_get_upload_dir()['basedir'];

        return $base_upload_dir . $relative_media_url;
    }
}

if (!function_exists('include_media')) {
    function include_media($media_url) {
        try {
            $fullpath = get_media_fullpath($media_url);

            if (is_readable($fullpath) && is_file($fullpath)) {
                $ext = pathinfo($fullpath, PATHINFO_EXTENSION);

                if ($ext === 'svg') {
                    $content = file_get_contents($fullpath);
                    $content = preg_replace("/<\?xml.*\?>/", '', $content);

                    echo $content;
                } else {
                    include $fullpath;
                }
            }
        } catch (Exception $e) {
            $message = esc_html($e->getMessage());

            echo "<!-- $message -->";
        }
    }
}

if (!function_exists('get_short_excerpt')) {
    function get_short_excerpt($limit = null)
    {
        if (!$limit) {
            $limit = apply_filters('excerpt_length', $limit);
        }

        $more = apply_filters('excerpt_more', '...');

        return wp_trim_words(get_the_excerpt(), $limit, $more);
    }
}

if (!function_exists('partial')) {
    function partial($name, $locals = [])
    {
        $theme_file = "/partials/$name.php";
        $filename = get_template_directory() . $theme_file;

        if (is_readable($filename)) {
            extract($locals);

            include $filename;
        } else {
            echo <<<HTML
                <div class="backend__partial missing">
                    <p>Failed to include partial "$name": No such file or directory</p>
                    <p><code>&lt;THEME_DIRECTORY&gt;$theme_file</code></p>
                </div>
            HTML;
        }
    }
}

if (!function_exists('mashvp_do_blocks')) {
    function mashvp_do_blocks($field_name = 'content_blocks')
    {
        if (have_rows($field_name)) {
            while (have_rows($field_name)) {
                the_row();
                $layout = get_row_layout();

                partial("blocks/$layout");
            }
        }
    }
}

if (!function_exists('get_page_using_template')) {
    function get_page_using_template($name)
    {
        $pages = get_pages([
            'meta_key'   => '_wp_page_template',
            'meta_value' => "templates/$name.php"
        ]);

        if (count($pages) > 0) {
            return $pages[0];
        }

        return null;
    }
}

if (!function_exists('get_previous_posts_link_url')) {
    function get_previous_posts_link_url()
    {
        global $paged;

        if (!is_single() && $paged > 1) {
            return previous_posts(false);
        }

        return null;
    }
}

if (!function_exists('get_next_posts_link_url')) {
    function get_next_posts_link_url($max_page = 0)
    {
        global $paged, $wp_query;

        if (!$max_page) {
            $max_page = $wp_query->max_num_pages;
        }

        if (!$paged) {
            $paged = 1;
        }

        $nextpage = intval($paged) + 1;

        if (!is_single() && ($nextpage <= $max_page)) {
            return next_posts($max_page, false);
        }

        return null;
    }
}

if (!function_exists('has_pagination')) {
    function has_pagination()
    {
        return get_previous_posts_link() || get_next_posts_link();
    }
}

if (function_exists('get_field')) {
    function get_group_field($group, $field, $post_id = false)
    {
        $data = get_field($group, $post_id);

        if (is_array($data) && array_key_exists($field, $data)) {
            return $data[$field];
        }

        return null;
    }
}

if (function_exists('get_sub_field')) {
    function get_sub_group_field($group, $field)
    {
        $data = get_sub_field($group);

        if (is_array($data) && array_key_exists($field, $data)) {
            return $data[$field];
        }

        return null;
    }
}

if (!function_exists('swap_post')) {
    function swap_post($new_post)
    {
        global $post;
        global $previous_post;

        if ($post) {
            $previous_post = $post;
            $post = $new_post;
        }
    }
}

if (!function_exists('restore_post')) {
    function restore_post()
    {
        global $post;
        global $previous_post;

        if ($previous_post) {
            $post = $previous_post;
            $previous_post = null;
        }
    }
}
