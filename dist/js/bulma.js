"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var navBurger = document.querySelector('.navbar-burger');
  var navBar = document.querySelector('.navbar');

  if (navBurger) {
    navBurger.addEventListener('click', function () {
      var target = navBurger.dataset.target;

      var _target = document.getElementById(target);

      navBar.classList.toggle('is-active');
      navBurger.classList.toggle('is-active');

      _target.classList.toggle('is-active');
    });
  }

  var lastScrollPostionY = 0;
  window.addEventListener('scroll', function () {
    lastScrollPostionY = window.scrollY;

    if (lastScrollPostionY > 5) {
      navBar.classList.add('is-scrolled');
    } else {
      navBar.classList.remove('is-scrolled');
    }
  });
});
var REG_EX = {
  EMAIL: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
};

var isValidEmail = function isValidEmail(email) {
  return REG_EX.EMAIL.test(email);
};

var contactFormSubmit = function contactFormSubmit() {
  var emailInput = document.getElementById('email');
  var emailValue = emailInput.value;
  var isValid = isValidEmail(emailValue);

  if (isValid) {
    emailInput.classList.remove('is-danger');
  } else {
    emailInput.classList.add('is-danger');
  }

  return isValid;
};