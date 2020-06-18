document.documentElement.className = "js";

var menu = document.querySelector(".menu"),
  button = document.querySelector(".nav-toggle"),
  dropdown = document.querySelector(".dropdown");

//click hamburger open and close dropdown nav
// button.onclick = function () {
//   classie.toggle(menu, "menu-active");
// };

// Hamburger hover open and close dropdown nav
button.onmouseenter = function () {
  classie.toggle(menu, "menu-active");
};

// Close menu when clicking outside
document.addEventListener("click", function (event) {
  if (event.target !== dropdown && !dropdown.contains(event.target)) {
    // hide the menu
    classie.removeClass(menu, "menu-active");
  }
});

(function (window) {
  "use strict";

  function classReg(className) {
    return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
  }

  // classList support for class management
  var hasClass, addClass, removeClass;

  if ("classList" in document.documentElement) {
    hasClass = function (elem, c) {
      return elem.classList.contains(c);
    };
    addClass = function (elem, c) {
      elem.classList.add(c);
    };
    removeClass = function (elem, c) {
      elem.classList.remove(c);
    };
  } else {
    hasClass = function (elem, c) {
      return classReg(c).test(elem.className);
    };
    addClass = function (elem, c) {
      if (!hasClass(elem, c)) {
        elem.className = elem.className + " " + c;
      }
    };
    removeClass = function (elem, c) {
      elem.className = elem.className.replace(classReg(c), " ");
    };
  }

  function toggleClass(elem, c) {
    var fn = hasClass(elem, c) ? removeClass : addClass;
    fn(elem, c);
  }

  var classie = {
    // full names
    hasClass: hasClass,
    addClass: addClass,
    removeClass: removeClass,
    toggleClass: toggleClass,
    // short names
    has: hasClass,
    add: addClass,
    remove: removeClass,
    toggle: toggleClass,
  };

  // transport
  if (typeof define === "function" && define.amd) {
    // AMD
    define(classie);
  } else if (typeof exports === "object") {
    // CommonJS
    module.exports = classie;
  } else {
    // browser global
    window.classie = classie;
  }
})(window);

//changes click on
dropdown.addEventListener("click", function (event) {
  //log mouse event
  // console.log("event target", event.target);
  // console.log("event target id", event.target.id);
  // console.log(event);
  document.body.style.backgroundColor = event.target.id;
  document.querySelector("h1").innerHTML = event.target.id;
});

//key press change color
document.onkeypress = (event) => {
  if (parseInt(event.key) === 1) {
    document.body.style.backgroundColor = "red";
    document.querySelector("h1").innerHTML = "red";
  }
  if (parseInt(event.key) === 2) {
    document.body.style.backgroundColor = "orange";
    document.querySelector("h1").innerHTML = "orange";
  }
  if (parseInt(event.key) === 3) {
    document.body.style.backgroundColor = "purple";
    document.querySelector("h1").innerHTML = "purple";
  }
  if (parseInt(event.key) === 4) {
    document.body.style.backgroundColor = "green";
    document.querySelector("h1").innerHTML = "green";
  }

  // console.log("key pressed", typeof event.key);
  // console.log("event", event);
};
