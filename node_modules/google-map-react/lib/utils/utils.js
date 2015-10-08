"use strict";

exports.__esModule = true;
var GOOGLE_TILE_SIZE = 256;

function latLng2World(_ref) {
  var lat = _ref.lat;
  var lng = _ref.lng;

  var sin = Math.sin(lat * Math.PI / 180);
  var x = lng / 360 + 0.5;
  var y = 0.5 - 0.25 * Math.log((1 + sin) / (1 - sin)) / Math.PI;

  y = y < -1 // eslint-disable-line
  ? -1 : y > 1 ? 1 : y;
  return { x: x, y: y };
}

function world2LatLng(_ref2) {
  var x = _ref2.x;
  var y = _ref2.y;

  var n = Math.PI - 2 * Math.PI * y;

  return {
    lat: 180 / Math.PI * Math.atan(0.5 * (Math.exp(n) - Math.exp(-n))),
    lng: x * 360 - 180
  };
}

exports["default"] = {
  fitBounds: function fitBounds(_ref3, _ref4) {
    var nw = _ref3.nw;
    var se = _ref3.se;
    var width = _ref4.width;
    var height = _ref4.height;

    var EPS = 0.000000001;
    var nwWorld = latLng2World(nw);
    var seWorld = latLng2World(se);
    var dx = nwWorld.x < seWorld.x ? seWorld.x - nwWorld.x : 1 - nwWorld.x + seWorld.x;
    var dy = seWorld.y - nwWorld.y;

    if (dx <= 0 && dy <= 0) {
      return null;
    }

    var zoomX = Math.log2(width / GOOGLE_TILE_SIZE / dx);
    var zoomY = Math.log2(height / GOOGLE_TILE_SIZE / dy);
    var zoom = Math.floor(EPS + Math.min(zoomX, zoomY));

    // TODO find center just unproject middle world point
    var middle = {
      x: nwWorld.x < seWorld.x // eslint-disable-line
      ? 0.5 * (nwWorld.x + seWorld.x) : nwWorld.x + seWorld.x - 1 > 0 ? 0.5 * (nwWorld.x + seWorld.x - 1) : 0.5 * (1 + nwWorld.x + seWorld.x),
      y: 0.5 * (nwWorld.y + seWorld.y)
    };

    return {
      center: world2LatLng(middle),
      zoom: zoom
    };
  },

  // --------------------------------------------------
  // Helper functions for working with svg tiles, (examples coming soon)

  tile2LatLng: function tile2LatLng(_ref5, zoom) {
    var x = _ref5.x;
    var y = _ref5.y;

    var n = Math.PI - 2 * Math.PI * y / Math.pow(2, zoom);

    return {
      lat: 180 / Math.PI * Math.atan(0.5 * (Math.exp(n) - Math.exp(-n))),
      lng: x / Math.pow(2, zoom) * 360 - 180
    };
  },

  latLng2Tile: function latLng2Tile(_ref6, zoom) {
    var lat = _ref6.lat;
    var lng = _ref6.lng;

    var worldCoords = latLng2World({ lat: lat, lng: lng });
    var scale = Math.pow(2, zoom);

    return {
      x: Math.floor(worldCoords.x * scale),
      y: Math.floor(worldCoords.y * scale)
    };
  },

  getTilesIds: function getTilesIds(_ref7, zoom) {
    var from = _ref7.from;
    var to = _ref7.to;

    var scale = Math.pow(2, zoom);

    var ids = [];
    for (var x = from.x; x !== (to.x + 1) % scale; x = (x + 1) % scale) {
      for (var y = from.y; y !== (to.y + 1) % scale; y = (y + 1) % scale) {
        ids.push([zoom, x, y]);
      }
    }

    return ids;
  }
};
module.exports = exports["default"];