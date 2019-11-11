
document.addEventListener('DOMContentLoaded', () => {
    const navBurger = document.querySelector('.navbar-burger');
    const navBar = document.querySelector('.navbar');
    
    if (navBurger) {
      navBurger.addEventListener('click', () => {
          const target = navBurger.dataset.target;
          const _target = document.getElementById(target);
  
          navBar.classList.toggle('is-active');
          navBurger.classList.toggle('is-active');
          _target.classList.toggle('is-active');
        });
    }

    let lastScrollPostionY = 0;
    window.addEventListener('scroll', () => {
      lastScrollPostionY = window.scrollY;

      if (lastScrollPostionY > 5) {
        navBar.classList.add('is-scrolled');
      }
      else {
        navBar.classList.remove('is-scrolled');
      }

    });
  });


  const REG_EX = {
    EMAIL: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  };

  const isValidEmail = (email) => {
    return REG_EX.EMAIL.test(email)
  };

  const contactFormSubmit = () => {
    const emailInput = document.getElementById('email');
    const emailValue = emailInput.value;
    const isValid = isValidEmail(emailValue)

    if (isValid) {
      emailInput.classList.remove('is-danger');
    }
    else {
      emailInput.classList.add('is-danger');
    }

    return isValid;
  };