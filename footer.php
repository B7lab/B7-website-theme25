
    <div class="color-band" id="footer-color-band" style="background-color: var(--technikblau);"></div>

    <footer id="main-footer">
        <div class="container">
            <div id="footer-links">
                <?php wp_nav_menu( array( 
                    'theme_location' => 'b7_footer-menu', 
                    'depth' => 1 
                    ) 
                ); ?>
                <!--<ul>
                    <li><a href="#kontakt">Kontakt</a></li>
                    <li><a href="#datenschutz">Datenschutz</a></li>
                    <li><a href="#impressum">Impressum</a></li>
                    <li>
                        <a href="https://facebook.com" target="_blank">
                            <img src="wp-content/themes/www/assets/img/facebook-logo_800x800.svg" alt="Facebook">
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com" target="_blank">
                            <img src="wp-content/themes/www/assets/img/instagram-logo_800x800.svg" alt="Instagram">
                        </a>
                    </li>
                </ul>-->
            </div>
            <div id="footer-copyright">
                <p>&copy; 2025 Blumenthal 7 e.V. Alle Rechte vorbehalten.</p>
            </div>
        </div>
    </footer>
    <?php wp_footer(); ?>
</body>
</html>
