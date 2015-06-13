// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke'),
  cube = require('bespoke-theme-cube'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  bullets = require('bespoke-bullets'),
  backdrop = require('bespoke-backdrop'),
  scale = require('bespoke-scale'),
<<<<<<< HEAD
=======

  hash = require('bespoke-hash'),

>>>>>>> 04fa2fa43e17e7c30d70087f30cb0a8f98172497
  progress = require('bespoke-progress'),
  forms = require('bespoke-forms');

// Bespoke.js
bespoke.from('article', [
  cube(),
  keys(),
  touch(),
  bullets('li, .bullet'),
  backdrop(),
  scale(),
<<<<<<< HEAD
=======

  hash(),

>>>>>>> 04fa2fa43e17e7c30d70087f30cb0a8f98172497
  progress(),
  forms()
]);

// Prism syntax highlighting
// This is actually loaded from "bower_components" thanks to
// debowerify: https://github.com/eugeneware/debowerify
<<<<<<< HEAD
require('prism');

=======

// require('prism');

require('prism');


>>>>>>> 04fa2fa43e17e7c30d70087f30cb0a8f98172497
