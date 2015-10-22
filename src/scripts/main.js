$ = window.jQuery = window.$ = require("jquery");

// eliminate 300ms delay in touch UIs
var attachFastClick = require('fastclick');
attachFastClick(document.body);

require("velocity-animate");
require('velocity-animate/velocity.ui');


require('./modules/pre-loader');
require('./modules/controller-switch').init();
require('./modules/arrow').init();
require('./modules/hamburger-menu').init();
require('./modules/information-overlay').init();
require('./modules/magnify-lens').init();
require('./modules/select-box');
require('./modules/image-map-types');


