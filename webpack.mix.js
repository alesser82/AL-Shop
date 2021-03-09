let mix = require('laravel-mix');

mix.js('src/main.js', 'dist/main.js')
    .babel('dist/main.js', 'lib/main.js')