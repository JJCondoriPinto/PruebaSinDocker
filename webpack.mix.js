let mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js').setPublicPath('public');
mix.css('resources/css/app.css', 'public/css').setPublicPath('public');
