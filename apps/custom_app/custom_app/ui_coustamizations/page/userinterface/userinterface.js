frappe.pages["userinterface"].on_page_load = function (wrapper) {
  var parent = $('<div class="welcome-to-erpnext"></div>').appendTo(wrapper);

  parent.html(frappe.render_template("userinterface", {}));

  document
    .getElementById("toggle-drawer")
    .addEventListener("click", function () {
      const sideDrawer = document.querySelector(".side-drawer");
      sideDrawer.classList.toggle("open");
    });

  // Add click event listener to the document body
  document.body.addEventListener("click", function (event) {
    const sideDrawer = document.querySelector(".side-drawer");
    const toggleDrawerButton = document.getElementById("toggle-drawer");

    // Check if the click event target is not inside the drawer or the toggle button
    if (
      !sideDrawer.contains(event.target) &&
      event.target !== toggleDrawerButton
    ) {
      // Close the drawer if it's open
      if (sideDrawer.classList.contains("open")) {
        sideDrawer.classList.remove("open");
      }
    }
  });

  document
    .getElementById("toggle-drawer1")
    .addEventListener("click", function () {
      const sideDrawer = document.querySelector(".side-drawer1");
      sideDrawer.classList.toggle("open");
    });

  // Add click event listener to the document body
  document.body.addEventListener("click", function (event) {
    const sideDrawer = document.querySelector(".side-drawer1");
    const toggleDrawerButton = document.getElementById("toggle-drawer1");

    // Check if the click event target is not inside the drawer or the toggle button
    if (
      !sideDrawer.contains(event.target) &&
      event.target !== toggleDrawerButton
    ) {
      // Close the drawer if it's open
      if (sideDrawer.classList.contains("open")) {
        sideDrawer.classList.remove("open");
      }
    }
  });

  document
    .getElementById("toggle-drawer2")
    .addEventListener("click", function () {
      const sideDrawer = document.querySelector(".side-drawer2");
      sideDrawer.classList.toggle("open");
    });

  // Add click event listener to the document body
  document.body.addEventListener("click", function (event) {
    const sideDrawer = document.querySelector(".side-drawer2");
    const toggleDrawerButton = document.getElementById("toggle-drawer2");

    // Check if the click event target is not inside the drawer or the toggle button
    if (
      !sideDrawer.contains(event.target) &&
      event.target !== toggleDrawerButton
    ) {
      // Close the drawer if it's open
      if (sideDrawer.classList.contains("open")) {
        sideDrawer.classList.remove("open");
      }
    }
  });

  document
    .getElementById("toggle-drawer3")
    .addEventListener("click", function () {
      const sideDrawer = document.querySelector(".side-drawer3");
      sideDrawer.classList.toggle("open");
    });

  // Add click event listener to the document body
  document.body.addEventListener("click", function (event) {
    const sideDrawer = document.querySelector(".side-drawer3");
    const toggleDrawerButton = document.getElementById("toggle-drawer3");

    // Check if the click event target is not inside the drawer or the toggle button
    if (
      !sideDrawer.contains(event.target) &&
      event.target !== toggleDrawerButton
    ) {
      // Close the drawer if it's open
      if (sideDrawer.classList.contains("open")) {
        sideDrawer.classList.remove("open");
      }
    }
  });

  document
    .getElementById("toggle-drawer4")
    .addEventListener("click", function () {
      const sideDrawer = document.querySelector(".side-drawer4");
      sideDrawer.classList.toggle("open");
    });

  // Add click event listener to the document body
  document.body.addEventListener("click", function (event) {
    const sideDrawer = document.querySelector(".side-drawer4");
    const toggleDrawerButton = document.getElementById("toggle-drawer4");

    // Check if the click event target is not inside the drawer or the toggle button
    if (
      !sideDrawer.contains(event.target) &&
      event.target !== toggleDrawerButton
    ) {
      // Close the drawer if it's open
      if (sideDrawer.classList.contains("open")) {
        sideDrawer.classList.remove("open");
      }
    }
  });

  document
    .getElementById("toggle-drawer5")
    .addEventListener("click", function () {
      const sideDrawer = document.querySelector(".side-drawer5");
      sideDrawer.classList.toggle("open");
    });

  // Add click event listener to the document body
  document.body.addEventListener("click", function (event) {
    const sideDrawer = document.querySelector(".side-drawer5");
    const toggleDrawerButton = document.getElementById("toggle-drawer5");

    // Check if the click event target is not inside the drawer or the toggle button
    if (
      !sideDrawer.contains(event.target) &&
      event.target !== toggleDrawerButton
    ) {
      // Close the drawer if it's open
      if (sideDrawer.classList.contains("open")) {
        sideDrawer.classList.remove("open");
      }
    }
  });

  document
    .getElementById("toggle-drawer6")
    .addEventListener("click", function () {
      const sideDrawer = document.querySelector(".side-drawer6");
      sideDrawer.classList.toggle("open");
    });

  // Add click event listener to the document body
  document.body.addEventListener("click", function (event) {
    const sideDrawer = document.querySelector(".side-drawer6");
    const toggleDrawerButton = document.getElementById("toggle-drawer6");

    // Check if the click event target is not inside the drawer or the toggle button
    if (
      !sideDrawer.contains(event.target) &&
      event.target !== toggleDrawerButton
    ) {
      // Close the drawer if it's open
      if (sideDrawer.classList.contains("open")) {
        sideDrawer.classList.remove("open");
      }
    }
  });

  document
    .getElementById("toggle-drawer7")
    .addEventListener("click", function () {
      const sideDrawer = document.querySelector(".side-drawer7");
      sideDrawer.classList.toggle("open");
    });

  // Add click event listener to the document body
  document.body.addEventListener("click", function (event) {
    const sideDrawer = document.querySelector(".side-drawer7");
    const toggleDrawerButton = document.getElementById("toggle-drawer7");

    // Check if the click event target is not inside the drawer or the toggle button
    if (
      !sideDrawer.contains(event.target) &&
      event.target !== toggleDrawerButton
    ) {
      // Close the drawer if it's open
      if (sideDrawer.classList.contains("open")) {
        sideDrawer.classList.remove("open");
      }
    }
  });

  document
    .getElementById("toggle-drawer8")
    .addEventListener("click", function () {
      const sideDrawer = document.querySelector(".side-drawer8");
      sideDrawer.classList.toggle("open");
    });

  // Add click event listener to the document body
  document.body.addEventListener("click", function (event) {
    const sideDrawer = document.querySelector(".side-drawer8");
    const toggleDrawerButton = document.getElementById("toggle-drawer8");

    // Check if the click event target is not inside the drawer or the toggle button
    if (
      !sideDrawer.contains(event.target) &&
      event.target !== toggleDrawerButton
    ) {
      // Close the drawer if it's open
      if (sideDrawer.classList.contains("open")) {
        sideDrawer.classList.remove("open");
      }
    }
  });

  document
    .getElementById("toggle-drawer9")
    .addEventListener("click", function () {
      const sideDrawer = document.querySelector(".side-drawer9");
      sideDrawer.classList.toggle("open");
    });

  // Add click event listener to the document body
  document.body.addEventListener("click", function (event) {
    const sideDrawer = document.querySelector(".side-drawer9");
    const toggleDrawerButton = document.getElementById("toggle-drawer9");

    // Check if the click event target is not inside the drawer or the toggle button
    if (
      !sideDrawer.contains(event.target) &&
      event.target !== toggleDrawerButton
    ) {
      // Close the drawer if it's open
      if (sideDrawer.classList.contains("open")) {
        sideDrawer.classList.remove("open");
      }
    }
  });

  document
    .getElementById("toggle-drawer10")
    .addEventListener("click", function () {
      const sideDrawer = document.querySelector(".side-drawer10");
      sideDrawer.classList.toggle("open");
    });

  // Add click event listener to the document body
  document.body.addEventListener("click", function (event) {
    const sideDrawer = document.querySelector(".side-drawer10");
    const toggleDrawerButton = document.getElementById("toggle-drawer10");

    // Check if the click event target is not inside the drawer or the toggle button
    if (
      !sideDrawer.contains(event.target) &&
      event.target !== toggleDrawerButton
    ) {
      // Close the drawer if it's open
      if (sideDrawer.classList.contains("open")) {
        sideDrawer.classList.remove("open");
      }
    }
  });

  document
    .getElementById("toggle-drawer11")
    .addEventListener("click", function () {
      const sideDrawer = document.querySelector(".side-drawer11");
      sideDrawer.classList.toggle("open");
    });

  // Add click event listener to the document body
  document.body.addEventListener("click", function (event) {
    const sideDrawer = document.querySelector(".side-drawer11");
    const toggleDrawerButton = document.getElementById("toggle-drawer11");

    // Check if the click event target is not inside the drawer or the toggle button
    if (
      !sideDrawer.contains(event.target) &&
      event.target !== toggleDrawerButton
    ) {
      // Close the drawer if it's open
      if (sideDrawer.classList.contains("open")) {
        sideDrawer.classList.remove("open");
      }
    }
  });
};
