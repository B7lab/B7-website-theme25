<!DOCTYPE html>
<html lang=<?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
    
    <header id="main-header">
        <div id="sponsors">
            <p>Gefördert durch</p>
            <div class="sponsor-logos">
                <img src="/wp-content/themes/www/assets/img/sponsor1.png" alt="Sponsor 1">
                <img src="/wp-content/themes/www/assets/img/sponsor2.png" alt="Sponsor 2">
                <img src="/wp-content/themes/www/assets/img/sponsor3.png" alt="Sponsor 3">
                <img src="/wp-content/themes/www/assets/img/sponsor4.png" alt="Sponsor 4">
                <img src="/wp-content/themes/www/assets/img/sponsor5.png" alt="Sponsor 5">
            </div>
        </div>

        <div id="menu-container">
            <div class="burger-menu" onclick="toggleMenu()">
                <div></div>
                <div></div>
                <div></div>
            </div>

            <nav id="main-menu" class="menu">
                <div class="burger-menu-close">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <?php wp_nav_menu(array(
                    'theme_location' => 'b7_main-menu',
                    'depth' => 3,
                    'container' => false,
                    'menu_class' => 'menu-list'
                )); ?>
            </nav>
        </div>
    </header>
