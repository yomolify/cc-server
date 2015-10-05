'use strict';

exports.__esModule = true;
exports['default'] = googleMapLoader;
var $script_ = null;

var _loadPromise = undefined;

// TODO add libraries language and other map options

function googleMapLoader(apiKey) {
  if (!$script_) {
    $script_ = require('scriptjs');
  }

  if (_loadPromise) {
    return _loadPromise;
  }

  _loadPromise = new Promise(function (resolve, reject) {
    if (typeof window === 'undefined') {
      reject(new Error('google map cannot be loaded outside browser env'));
      return;
    }

    if (window.google && window.google.maps) {
      resolve(window.google.maps);
      return;
    }

    if (typeof window._$_google_map_initialize_$_ !== 'undefined') {
      reject(new Error('google map initialization error'));
    }

    window._$_google_map_initialize_$_ = function () {
      delete window._$_google_map_initialize_$_;
      resolve(window.google.maps);
    };

    var apiKeyString = apiKey ? '&key=' + apiKey : '';

    $script_('https://maps.googleapis.com/maps/api/js?callback=_$_google_map_initialize_$_' + apiKeyString, function () {
      if (typeof window.google === 'undefined') {
        reject(new Error('google map initialization error (not loaded)'));
      }
    });
  });

  return _loadPromise;
}

module.exports = exports['default'];