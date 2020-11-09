'use strict';

/*
* Require the path module
*/
const path = require('path');

/*
 * Require the Fractal module
 */
const fractal = module.exports = require('@frctl/fractal').create();

// Set another theme to fractal
// require the Mandelbrot theme module
const mandelbrot = require('@frctl/mandelbrot');

// create a new instance with custom config options
const myCustomisedTheme = mandelbrot({
    skin: {
        name: 'default',
        accent: '#321d6f',
        complement: '#ffffff',
        links: '#158cba',
    }
    // any other theme configuration values here
});

// tell Fractal to use the configured theme by default
fractal.web.theme(myCustomisedTheme);

/*
 * Give your project a title.
 */
fractal.set('project.title', 'Tailwind Fractal Vue Boilerplate');

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set('path', path.join(__dirname, 'src/components'));

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('path', path.join(__dirname, 'src/docs'));

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path', path.join(__dirname, 'public'));