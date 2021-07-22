<?php

define('THEME_TEXT_DOMAIN', '');

function include_backend($filename)
{
    include get_template_directory() . "/backend/$filename.php";
}

$files = [
  'utils',
  'base',
  'back_office',
  'menu',
  'acf',
];

foreach ($files as $file) {
    include_backend($file);
}
