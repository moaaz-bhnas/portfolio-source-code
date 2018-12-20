"use strict";

// Function from: https://stackoverflow.com/a/36191841/7982963
var isValueSupported = function isValueSupported(prop, value) {
  var el = document.createElement('div');
  el.style[prop] = value;
  return el.style[prop] === value;
}; // Function from: http://lea.verou.me/2009/02/check-if-a-css-property-is-supported/


var isPropertySupported = function isPropertySupported(property) {
  return property in document.body.style;
}; // Both


var detectPropertyAndValue = function detectPropertyAndValue(prop, value) {
  return isPropertySupported(prop) && isValueSupported(prop, value) ? true : false;
};