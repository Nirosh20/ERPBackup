frappe.pages["test"].on_page_load = function (wrapper) {
  var parent = $('<div class="welcome-to-erpnext"></div>').appendTo(wrapper);

  parent.html(frappe.render_template("test", {}));

  const element1 = document.querySelector(".toggle-drawer6");
  const element2 = document.querySelector(".toggle-drawer16");

  body.addEventListener("click", (event) => {
    if (event.target !== element1) {
      getElementById("toggle-drawer6").addEventListener("click", function () {
        const sideDrawer = document.querySelector(".side-drawer6");
        sideDrawer.classList.toggle("open");
      });
    } else if (event.target !== element2) {
      getElementById("toggle-drawer16").addEventListener("click", function () {
        const sideDrawer = document.querySelector(".side-drawer6");
        sideDrawer.classList.toggle("open");
      });
    } else {
    }
  });
};
