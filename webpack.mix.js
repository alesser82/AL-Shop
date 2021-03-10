let mix = require('laravel-mix');

mix.js('src/main.js', 'dist/main.js');
    // .babel('dist/main.js', 'lib/main.js')
// mix.combine(['src', 'files'], 'destination');
// mix.babel('src/main.js', 'dist/main.js');
// mix.minify('src');
// mix.minify(['src']);