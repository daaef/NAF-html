changetab = topic => {
  document.querySelectorAll(".button-icon-wrapper").forEach(function(el) {
    // console.log(el);
    el.classList.remove("is-active");
  });
  document
    .querySelectorAll(".block-options-switcher-state")
    .forEach(function(el) {
      // console.log(el);
      el.classList.remove("is-active");
    });
  console.log(topic);
  document.querySelectorAll(topic).forEach(function(el) {
    // console.log(el);
    el.classList.add("is-active");
  });
};
