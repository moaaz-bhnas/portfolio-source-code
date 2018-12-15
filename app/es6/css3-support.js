// Function from: https://stackoverflow.com/a/36191841/7982963
const isValueSupported = (prop, value) => {
  const el = document.createElement('div');
  el.style[prop] = value;
  return el.style[prop] === value;
}
// Function from: http://lea.verou.me/2009/02/check-if-a-css-property-is-supported/
const isPropertySupported = property =>  property in document.body.style;


/* Tests --- */
// 2d transforms
if (isPropertySupported('transform') && isValueSupported('transform', 'rotate(-30deg)')) {
  document.documentElement.classList.add('csstransforms');
} else {
  document.documentElement.classList.add('no-csstransforms');
}

// 3d transforms
if (isValueSupported('perspective', '400px') && isValueSupported('transform-style', 'preserve-3d') && isValueSupported('backface-visibility', 'hidden') && isValueSupported('transform', 'rotateY(-180deg)') && isPropertySupported('perspective') && isPropertySupported('transform-style') && isPropertySupported('backface-visibility') && isPropertySupported('transform') && (!navigator.userAgent.includes('Firefox'))) {
  document.documentElement.classList.add('csstransforms3d');
} else {
  document.documentElement.classList.add('no-csstransforms3d');
}