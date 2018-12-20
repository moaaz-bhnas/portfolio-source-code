'use strict';
/* Helper function --- */
// src: https://stackoverflow.com/a/13382873/7982963

function getScrollbarWidth() {
  var outer = document.createElement("div");
  outer.style.visibility = "hidden";
  outer.style.width = "100px";
  outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps

  document.body.appendChild(outer);
  var widthNoScroll = outer.offsetWidth; // force scrollbars

  outer.style.overflow = "scroll"; // add innerdiv

  var inner = document.createElement("div");
  inner.style.width = "100%";
  outer.appendChild(inner);
  var widthWithScroll = inner.offsetWidth; // remove divs

  outer.parentNode.removeChild(outer);
  return widthNoScroll - widthWithScroll;
}
/* Center the navbar --- */


var centerMenubar = function centerMenubar() {
  var navBar = document.querySelector('nav'); // Distract navbar's width from the window's width. The output should be equally divided on both sides

  var windowWidth = window.innerWidth - getScrollbarWidth();
  var navbarWidth = navBar.clientWidth;
  var marginLeft = (windowWidth - navbarWidth) / 2;
  navBar.style.marginLeft = "".concat(marginLeft, "px");
};

centerMenubar();
window.onresize = centerMenubar;
/* ================================================
  Workspace existance
=================================================== */

var cssForWorkspaceSupported = detectPropertyAndValue('perspective', '400px') && detectPropertyAndValue('transform-style', 'preserve-3d') && detectPropertyAndValue('transform', 'rotateY(90deg) translateZ(10px)') && isPropertySupported('transform-origin') && detectPropertyAndValue('justify-content', 'space-between') && detectPropertyAndValue('flex-direction', 'column') && detectPropertyAndValue('flex-grow', '1') && detectPropertyAndValue('object-fit', 'contain') && isPropertySupported('animation');

if (cssForWorkspaceSupported) {
  var _workspace = "<div class=\"workspace\" aria-hidden=\"true\">\n    <div class=\"scene\">\n      <div class=\"desk\">\n        <div class=\"face front\"></div>\n        <div class=\"face back\"></div>\n        <div class=\"face top\"></div>\n        <div class=\"face bottom\"></div>\n        <div class=\"face right\"></div>\n        <div class=\"face left\"></div>\n      </div>\n      <div class=\"laptop\">\n        <div class=\"screen\">\n          <div class=\"screen-face screen-front\">\n            <div class=\"viewport\"></div>\n          </div>\n          <div class=\"screen-face screen-back\"></div>\n          <div class=\"screen-face screen-top\"></div>\n          <div class=\"screen-face screen-bottom\"></div>\n          <div class=\"screen-face screen-right\"></div>\n          <div class=\"screen-face screen-left\"></div>\n        </div>\n        <div class=\"keyboard\">\n          <div class=\"keyboard-face keyboard-front\">\n            <div class=\"power-button\"></div>\n            <div class=\"buttons-grid\">\n              <div class=\"row\">\n                <div class=\"button\"></div>\n                <div class=\"button\"></div>\n                <div class=\"button\"></div>\n                <div class=\"button\"></div>\n                <div class=\"button\"></div>\n                <div class=\"button\"></div>\n                <div class=\"button\"></div>\n                <div class=\"button\"></div>\n                <div class=\"button\"></div>\n                <div class=\"button\"></div>\n                <div class=\"button\"></div>\n                <div class=\"button\"></div>\n              </div>\n              <div class=\"row\">\n                <div class=\"button\"></div>\n                <div class=\"button\"></div>\n                <div class=\"button\"></div>\n                <div class=\"button\"></div>\n                <div class=\"button\"></div>\n                <div class=\"button\"></div>\n                <div class=\"button\"></div>\n                <div class=\"button\"></div>\n                <div class=\"button\"></div>\n                <div class=\"button\"></div>\n                <div class=\"button\"></div>\n                <div class=\"button\"></div>\n              </div>\n              <div class=\"row\">\n                <div class=\"button\"></div>\n                <div class=\"button\"></div>\n                <div class=\"button\"></div>\n                <div class=\"button\"></div>\n                <div class=\"button\"></div>\n                <div class=\"button\"></div>\n                <div class=\"button\"></div>\n                <div class=\"button\"></div>\n                <div class=\"button\"></div>\n                <div class=\"button\"></div>\n                <div class=\"button enter\"></div>\n              </div>\n              <div class=\"row\">\n                <div class=\"button\"></div>\n                <div class=\"button\"></div>\n                <div class=\"button\"></div>\n                <div class=\"button\"></div>\n                <div class=\"button\"></div>\n                <div class=\"button\"></div>\n                <div class=\"button\"></div>\n                <div class=\"button\"></div>\n                <div class=\"button\"></div>\n                <div class=\"button\"></div>\n                <div class=\"button\"></div>\n                <div class=\"button\"></div>\n              </div>\n              <div class=\"row\">\n                <div class=\"button\"></div>\n                <div class=\"button\"></div>\n                <div class=\"button\"></div>\n                <div class=\"button space\"></div>\n                <div class=\"button\"></div>\n                <div class=\"button\"></div>\n                <div class=\"button\"></div>\n              </div>\n            </div>\n          </div>\n          <div class=\"keyboard-face keyboard-back\"></div>\n          <div class=\"keyboard-face keyboard-top\"></div>\n          <div class=\"keyboard-face keyboard-bottom\"></div>\n          <div class=\"keyboard-face keyboard-right\"></div>\n          <div class=\"keyboard-face keyboard-left\"></div>\n        </div>\n      </div>\n      <div class=\"nail\"></div>\n      <div class=\"portrait\">\n        <div class=\"thread\"></div>\n        <div class=\"thread\"></div>\n        <div class=\"portrait-face portrait-front\">\n          <img class=\"photo\" src=\"images/meowth.svg\">\n        </div>\n        <div class=\"portrait-face portrait-back\"></div>\n        <div class=\"portrait-face portrait-top\"></div>\n        <div class=\"portrait-face portrait-bottom\"></div>\n        <div class=\"portrait-face portrait-right\"></div>\n        <div class=\"portrait-face portrait-left\"></div>\n      </div>\n      <div class=\"papers\">\n        <div class=\"paper paper-1\"></div>\n        <div class=\"paper paper-2\"></div>\n        <div class=\"paper paper-3\"></div>\n        <div class=\"paper paper-4\"></div>\n        <div class=\"paper paper-5\"></div>\n        <div class=\"paper paper-6\">\n          <div class=\"line\"></div>\n          <div class=\"line\"></div>\n          <div class=\"line\"></div>\n          <div class=\"line\"></div>\n          <div class=\"line\"></div>\n          <div class=\"line\"></div>\n          <div class=\"line\"></div>\n          <div class=\"line\"></div>\n          <div class=\"line\"></div>\n          <div class=\"line\"></div>\n        </div>\n      </div>\n    </div>\n  </div>";
  var header = document.querySelector('header');
  header.insertAdjacentHTML('beforeend', _workspace);
}
/* ================================================
  Box shadow and background colors 
=================================================== */

/* DOM elements and positions --- */
// Navigation bar


var navBar = document.querySelector('nav');
var projects = document.getElementById('featured-projects');
var projectsTopPos = projects.offsetTop;
var projectsHeight = projects.offsetHeight;
var projectsBottomPos = projectsTopPos + projectsHeight;

if (cssForWorkspaceSupported) {
  var workspace = document.querySelector('.workspace');
  var workspaceTopPos = workspace.offsetTop;
  var workspaceHeight = workspace.offsetHeight;
  var workspaceBottomPos = workspaceTopPos + workspaceHeight;
}
/* Event Listener --- */


window.onscroll = function addBoxShadowAndBackgroundColor() {
  (function addBoxShadow() {
    var windowScrolled = window.pageYOffset > 0;

    if (windowScrolled) {
      navBar.setAttribute('data-scrolled', 'true');
    } else {
      navBar.setAttribute('data-scrolled', 'false');
    }
  })();

  (function addBackgroundColor() {
    var navBarBottomPos = window.pageYOffset + navBar.offsetHeight;
    var navbarOnWorkspace = cssForWorkspaceSupported ? navBarBottomPos > workspaceTopPos && navBarBottomPos < workspaceBottomPos : null;
    var navbarOnProjectsSection = navBarBottomPos > projectsTopPos && navBarBottomPos < projectsBottomPos;

    if (navbarOnProjectsSection || navbarOnWorkspace) {
      navBar.setAttribute('data-oncolor', 'true');
    } else {
      navBar.setAttribute('data-oncolor', 'false');
    }
  })();
};
/* ================================================
  3D workspace 
=================================================== */


if (cssForWorkspaceSupported) {
  var scene = document.querySelector('.scene');

  workspace.onmousemove = function changePerspectiveOrigin(event) {
    var Xmouse = event.pageX;
    var Ymouse = event.pageY; // Calc perspective

    var Xpers = Xmouse / window.innerWidth;
    var Ypers = Ymouse / window.innerHeight;
    var Xpos = Xpers * 100;
    var Ypos = Ypers * 100 / 4; // Change perspective-origin

    scene.style.perspectiveOrigin = "".concat(Xpos, "% ").concat(Ypos, "%");
  };

  workspace.onmouseout = function backToDefault() {
    scene.style.perspectiveOrigin = '50% 10%';
  };
}