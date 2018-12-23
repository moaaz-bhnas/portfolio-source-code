'use strict';

/* Helper function --- */
// src: https://stackoverflow.com/a/13382873/7982963
function getScrollbarWidth() {
  var outer = document.createElement("div");
  outer.style.visibility = "hidden";
  outer.style.width = "100px";
  outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps

  document.body.appendChild(outer);

  var widthNoScroll = outer.offsetWidth;
  // force scrollbars
  outer.style.overflow = "scroll";

  // add innerdiv
  var inner = document.createElement("div");
  inner.style.width = "100%";
  outer.appendChild(inner);        

  var widthWithScroll = inner.offsetWidth;

  // remove divs
  outer.parentNode.removeChild(outer);

  return widthNoScroll - widthWithScroll;
}

/* Center the navbar --- */
const centerMenubar = () => {
  const navBar = document.querySelector('nav');
  // Distract navbar's width from the window's width. The output should be equally divided on both sides
  const windowWidth = window.innerWidth - getScrollbarWidth();
  const navbarWidth = navBar.clientWidth;
  const marginLeft = (windowWidth - navbarWidth) / 2;
  navBar.style.marginLeft = `${marginLeft}px`;
}
centerMenubar();

window.onresize = centerMenubar;

/* ================================================
  Workspace existance
=================================================== */
const cssForWorkspaceSupported = detectPropertyAndValue('perspective', '400px') && 
detectPropertyAndValue('transform-style', 'preserve-3d') &&
detectPropertyAndValue('transform', 'rotateY(90deg) translateZ(10px)') &&
isPropertySupported('transform-origin') &&
detectPropertyAndValue('justify-content', 'space-between') &&
detectPropertyAndValue('flex-direction', 'column') &&
detectPropertyAndValue('flex-grow', '1') &&
detectPropertyAndValue('object-fit', 'contain') &&
isPropertySupported('animation');
if (cssForWorkspaceSupported) {
  const workspace = `<div class="workspace" aria-hidden="true">
    <div class="scene">
      <div class="desk">
        <div class="face front"></div>
        <div class="face back"></div>
        <div class="face top"></div>
        <div class="face bottom"></div>
        <div class="face right"></div>
        <div class="face left"></div>
      </div>
      <div class="laptop">
        <div class="screen">
          <div class="screen-face screen-front">
            <div class="viewport"></div>
          </div>
          <div class="screen-face screen-back"></div>
          <div class="screen-face screen-top"></div>
          <div class="screen-face screen-bottom"></div>
          <div class="screen-face screen-right"></div>
          <div class="screen-face screen-left"></div>
        </div>
        <div class="keyboard">
          <div class="keyboard-face keyboard-front">
            <div class="power-button"></div>
            <div class="buttons-grid">
              <div class="row">
                <div class="button"></div>
                <div class="button"></div>
                <div class="button"></div>
                <div class="button"></div>
                <div class="button"></div>
                <div class="button"></div>
                <div class="button"></div>
                <div class="button"></div>
                <div class="button"></div>
                <div class="button"></div>
                <div class="button"></div>
                <div class="button"></div>
              </div>
              <div class="row">
                <div class="button"></div>
                <div class="button"></div>
                <div class="button"></div>
                <div class="button"></div>
                <div class="button"></div>
                <div class="button"></div>
                <div class="button"></div>
                <div class="button"></div>
                <div class="button"></div>
                <div class="button"></div>
                <div class="button"></div>
                <div class="button"></div>
              </div>
              <div class="row">
                <div class="button"></div>
                <div class="button"></div>
                <div class="button"></div>
                <div class="button"></div>
                <div class="button"></div>
                <div class="button"></div>
                <div class="button"></div>
                <div class="button"></div>
                <div class="button"></div>
                <div class="button"></div>
                <div class="button enter"></div>
              </div>
              <div class="row">
                <div class="button"></div>
                <div class="button"></div>
                <div class="button"></div>
                <div class="button"></div>
                <div class="button"></div>
                <div class="button"></div>
                <div class="button"></div>
                <div class="button"></div>
                <div class="button"></div>
                <div class="button"></div>
                <div class="button"></div>
                <div class="button"></div>
              </div>
              <div class="row">
                <div class="button"></div>
                <div class="button"></div>
                <div class="button"></div>
                <div class="button space"></div>
                <div class="button"></div>
                <div class="button"></div>
                <div class="button"></div>
              </div>
            </div>
          </div>
          <div class="keyboard-face keyboard-back"></div>
          <div class="keyboard-face keyboard-top"></div>
          <div class="keyboard-face keyboard-bottom"></div>
          <div class="keyboard-face keyboard-right"></div>
          <div class="keyboard-face keyboard-left"></div>
        </div>
      </div>
      <div class="nail"></div>
      <div class="portrait">
        <div class="thread"></div>
        <div class="thread"></div>
        <div class="portrait-face portrait-front">
          <img class="photo" src="images/meowth.svg">
        </div>
        <div class="portrait-face portrait-back"></div>
        <div class="portrait-face portrait-top"></div>
        <div class="portrait-face portrait-bottom"></div>
        <div class="portrait-face portrait-right"></div>
        <div class="portrait-face portrait-left"></div>
      </div>
      <div class="papers">
        <div class="paper paper-1"></div>
        <div class="paper paper-2"></div>
        <div class="paper paper-3"></div>
        <div class="paper paper-4"></div>
        <div class="paper paper-5"></div>
        <div class="paper paper-6">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </div>
    </div>
  </div>`;

  const header = document.querySelector('header');
  header.insertAdjacentHTML('beforeend', workspace);
}

/* ================================================
  Box shadow and background colors 
=================================================== */
/* DOM elements --- */
const navBar = document.querySelector('nav');
const projects = document.getElementById('featured-projects');
if (cssForWorkspaceSupported) {
  var workspace = document.querySelector('.workspace');
}

/* Event Listener --- */
window.onscroll = function addBoxShadowAndBackgroundColor() {
  (function addBoxShadow() {
    const windowScrolled = (window.pageYOffset > 0);
    if (windowScrolled) {
      navBar.setAttribute('data-scrolled', 'true');
    } else {
      navBar.setAttribute('data-scrolled', 'false');
    }
  })();

  (function addBackgroundColor() {
    /* Positions --- */
    // navbar
    const navBarBottomPos = window.pageYOffset + navBar.offsetHeight;
    // projects section
    const projectsTopPos = projects.offsetTop;
    const projectsHeight = projects.offsetHeight;
    const projectsBottomPos = projectsTopPos + projectsHeight;
    // Workspace
    if (cssForWorkspaceSupported) {
      var workspaceTopPos = workspace.offsetTop;
      var workspaceHeight = workspace.offsetHeight;
      var workspaceBottomPos = workspaceTopPos + workspaceHeight;
    }
    /* Detect overlap --- */
    const navbarOnWorkspace = cssForWorkspaceSupported ? (navBarBottomPos > workspaceTopPos) && (navBarBottomPos < workspaceBottomPos) : null;
    const navbarOnProjectsSection = (navBarBottomPos > projectsTopPos) && (navBarBottomPos < projectsBottomPos);
    /* Set the attributes responsible for background colors --- */
    if (navbarOnProjectsSection || navbarOnWorkspace) {
      navBar.setAttribute('data-oncolor', 'true');
    } else {
      navBar.setAttribute('data-oncolor', 'false');
    }
  })();
}

/* ================================================
  3D workspace 
=================================================== */
if (cssForWorkspaceSupported) {
  const scene = document.querySelector('.scene');

  workspace.onmousemove = function changePerspectiveOrigin(event) {
    const Xmouse = event.pageX;
    const Ymouse = event.pageY;

    // Calc perspective
    const Xpers = Xmouse / window.innerWidth;
    const Ypers = Ymouse / window.innerHeight;
    const Xpos = Xpers * 100;
    const Ypos = (Ypers * 100) / 4;

    // Change perspective-origin
    scene.style.perspectiveOrigin = `${Xpos}% ${Ypos}%`; 
  }

  workspace.onmouseout = function backToDefault() {
    scene.style.perspectiveOrigin = '50% 10%';
  }
}

// Register Service Worker
if ('serviceWorker' in navigator) {
  window.onload = function() {
    navigator.serviceWorker.register('./sw.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  }
}