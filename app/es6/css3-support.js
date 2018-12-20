// Function from: https://stackoverflow.com/a/36191841/7982963
const isValueSupported = (prop, value) => {
  const el = document.createElement('div');
  el.style[prop] = value;
  return el.style[prop] === value;
}
// Function from: http://lea.verou.me/2009/02/check-if-a-css-property-is-supported/
const isPropertySupported = property =>  property in document.body.style;

// Both
const detectPropertyAndValue = (prop, value) => (isPropertySupported(prop) && isValueSupported(prop, value)) ? true : false;