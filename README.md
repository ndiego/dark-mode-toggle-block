# Dark Mode Toggle Block

[![Create Release and Deploy to WordPress.org](https://github.com/richtabor/dark-mode-toggle-block/actions/workflows/create-release-and-deploy.yml/badge.svg)](https://github.com/richtabor/dark-mode-toggle-block/actions/workflows/create-release-and-deploy.yml)

A WordPress block to add a toggle between light and dark appearances, as seen on [Rich Tabor's blog](https://rich.blog). Adds a `theme-dark` class to the body element, when toggled on. The user's preference is then saved in local storage. 

[Read about it on Rich's blog →](https://rich.blog/dark-mode-toggle-block/)

### Visual

https://github.com/richtabor/dark-mode-toggle-block/assets/1813435/f7255865-6328-4f54-8284-6bb2432d8ab2

### How it works
When toggled, the block will add a `.theme-dark` class to the body of the site. You can add CSS variables to target dark styles. 

To test with the Twenty Twenty-Five theme, you can add the following CSS to the theme's `style.css` file. Dark mode will use the Evening style variation colors. `.theme-dark body` is need for the frontend, whereas `body.theme-dark` is used in the Editor. 

```
/* Dark styles - Uses Evening style variation colors */
.theme-dark body,
body.theme-dark {
    --wp--preset--color--base: #1B1B1B;
    --wp--preset--color--contrast: #F0F0F0;
    --wp--preset--color--accent-1: #786D0A;
    --wp--preset--color--accent-2: #442369;
    --wp--preset--color--accent-3: #D1D0EA;
    --wp--preset--color--accent-4: #CBCBCB;
	--wp--preset--color--accent-5: #353535;
	--wp--preset--color--accent-6: #FFFFFF33;
}
```

Then make sure to enqueue the theme's stylesheet in the Editor by adding the following to the theme's `functions.php` file.

```php
function twentytwentyfive_enqueue_editor_styles() {

    // Enqueue editor styles.
    add_editor_style( 'style.css' );
}
add_action( 'after_setup_theme', 'twentytwentyfive_enqueue_editor_styles' );
```

### Development

1. Clone the repository into your WordPress plugins directory.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Activate the plugin on your local WordPress site.
5. Add the block to a post or page.
