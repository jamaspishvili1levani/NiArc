(function () {
  const isFormPage = /form\.html$/i.test(window.location.pathname);

  const sideMenu = document.getElementById("sideMenu");
  if (sideMenu) {
    sideMenu.innerHTML = `
        <nav aria-label="Side navigation">
            <ul class="menu-links">
                <li><a href="${isFormPage ? "./index.html#about-us" : "#about-us"}">About Us</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#" class="logout-text">Log out</a></li>
                <li class="menu-theme-toggle">
                    <span>Dark Theme</span>
                    <label class="theme-switch" for="checkbox">
                        <input type="checkbox" id="checkbox" />
                        <div class="slider round"></div>
                    </label>
                </li>
            </ul>
        </nav>`;
  }

  const header = document.getElementById("siteHeader");
  if (header) {
    header.innerHTML = `
        <div id="burgerMenu" class="burger-menu">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <a href="./index.html" class="logo">NiArc</a>
        <nav class="sign" aria-label="Account">
            <a href="#">Sign in</a>
            <span>/</span>
            <a href="#">Sign up</a>
        </nav>`;
  }

  const burgerMenu = document.getElementById("burgerMenu");
  if (burgerMenu && sideMenu) {
    burgerMenu.addEventListener("click", () => {
      burgerMenu.classList.toggle("active");
      sideMenu.classList.toggle("active");
    });
  }

  const toggleSwitch = document.querySelector(
    '.theme-switch input[type="checkbox"]',
  );
  if (toggleSwitch) {
    toggleSwitch.addEventListener("change", (e) => {
      if (e.target.checked) {
        document.body.classList.add("dark-mode");
      } else {
        document.body.classList.remove("dark-mode");
      }
    });
  }
})();
