<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'artrade' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

if ( !defined('WP_CLI') ) {
    define( 'WP_SITEURL', $_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['HTTP_HOST'] );
    define( 'WP_HOME',    $_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['HTTP_HOST'] );
}



/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '92zlrmY2HEZ9Qe9gJZQh5j2jSysSiafzFBjlququ5Zxs0Z1qqIplcXOpEUzHVkp7' );
define( 'SECURE_AUTH_KEY',  'L6DbzTSqY9SQnppVOOAiYGeV6mb4WW5zN2ifRH0YAnrZ6nTIgWfzzt7br0hqLSWF' );
define( 'LOGGED_IN_KEY',    'fPkK7PoZ31baOIL7617Qiy68DCLUNUeGhws5H98Y6lfelHfwlLuUjxEweEwZRwVI' );
define( 'NONCE_KEY',        'E517sOoUVTjHXmpo2ZYgbOaKFt23hgnCwy1lnLuBAevMlIZXC3NPjv8NiRUcT1KT' );
define( 'AUTH_SALT',        'h95WAlhjcobpuyH47OIh7cnmShJcV4dCEZZeNXd67Cpjh7SfsgD4H1py66DVJyhs' );
define( 'SECURE_AUTH_SALT', 'iYzHTh9sbpaR3z2P3VD7UVe7gRAUusI4aJCPnns9EE6hCq96uxUtVeFV4WpVuuPc' );
define( 'LOGGED_IN_SALT',   'qj7Fp0wejok7Tg3tkge3ahRp9QNloudFUVRZ9BgxdLkWd32ikl8jTyYmL73jjByO' );
define( 'NONCE_SALT',       'yEDDV3UZrnulKW48CBPYqDuI2Q1MjvIgE879TP6XLSzCOEVuaak0SRhMtfFG9Igr' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
