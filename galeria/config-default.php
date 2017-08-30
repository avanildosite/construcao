<?php
/*
 * This file is part of MinigalNano: https://github.com/sebsauvage/MinigalNano
 *
 * MiniGal Nano is based on an original work by Thomas Rybak (© 2010)
 *
 * MinigalNano is licensed under the AGPL v3 (https://gnu.org/licenses/agpl-3.0.txt).
 */

// EDIT SETTINGS BELOW TO CUSTOMIZE YOUR GALLERY

$thumbs_pr_page = "30"; // Number of thumbnails on a single page
$gallery_width = "90%"; // Gallery width. Eg: "500px" or "70%"
$backgroundcolor = "white"; // This provides a quick way to change your gallerys background to suit your website. Use either main colors like "black", "white", "yellow" etc. Or HEX colors, eg. "#AAAAAA"
/*
/var/www/temp/template/mnigal/MinigalNano-master/templates/board.html
/var/www/temp/template/mnigal/MinigalNano-master/templates/darkgold3.html
/var/www/temp/template/mnigal/MinigalNano-master/templates/darksideboard.html
/var/www/temp/template/mnigal/MinigalNano-master/templates/rounded.html
/var/www/temp/template/mnigal/MinigalNano-master/templates/squares.html
*/
$templatefile = "index"; // Template filename (must be placed in 'templates' folder)
//$templatefile = "board"; // Template filename (must be placed in 'templates' folder)
$title = "Galeria de fotos avanildo.com.br"; // Text to be displayed in browser titlebar
$author = "John Doe";
$folder_color = "vista"; // Color of folder icons: blue / black / vista / purple / green / grey
$sorting_folders = "Nome"; // Sort folders by: [name][date]
$sorting_files = "Nome"; // Sort files by: [name][date][size]
$sortdir_folders = SORT_ASC; // Sort direction of folders: SORT_ASC / SORT_DESC
$sortdir_files = SORT_ASC; // Sort direction of files: SORT_ASC / SORT_DESC
$lazyload = 1; // 0 is pagination, 1 is display all pictures on one page
$skip_objects = array('aFolder', 'aFile.ext'); //Those files and folders will not be displayed (affects the page and the RSS feed)

//LANGUAGE STRINGS
$label_home = "Voltar"; // Name of home link in breadcrumb navigation
$label_new = "Nova"; // Text to display for new images. Use with $display_new variable
$label_page = "Pagina"; // Text used for page navigation
$label_all = "Totas"; // Text used for link to display all images in one page
$label_noimages = "Não temos imagem ainda !"; // Empty folder text
$label_noimages_advice = "Coloque sua imagem na pasta fotos !";
$label_loading = "Carregando..."; // Thumbnail loading text
$breadcrumb_separator = "=>"; // Breadcrumb parts separator

//RSS SETTINGS
$description = "Gageria de fotos avanildo.com.br";
$nb_items_rss = 25; // Number of elements to display in the feed. If you add a lot of pictures at the time, consider increasing this number
$rss_refresh_interval = 60; // Time, in seconds, between two RSS refresh. for example, 3600 = 1update max per hour, 86400 = 1/day.
$keep_extensions = array('jpg', 'jpeg', 'png', 'gif'); //Files with one of this extension will not be displayed on the RSS feed

//ADVANCED SETTINGS
$thumb_size = 200; // Thumbnail height/width (square thumbs). Changing this will most likely require manual altering of the template file to make it look properly!
$label_max_length = 40; // Maximum chars of a folder name that will be displayed on the folder thumbnail
$display_exif = 0; // Take care, even if not diplayed EXIF are still readable for visitors. May be a good idea to erase EXIF data...
$display_filename = 0; // Show file names below the pictures
?>
