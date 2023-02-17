// execute script after page load
window.onload = function digital_finally() {
  // toggle button
  let toggle = document.querySelector("#nav .toggle-btn");
  let collapse = document.querySelector("#nav .collapse");

  toggle.addEventListener("click", function (event) {
    collapse.classList.toggle("active");
    // console.log(toggle);
  });
};
// mansonary grid//
let grid = document.querySelector("#site-main .recent-work-area .images-flex");

let msnry = new Masonry(grid,{
  itemSelector:".flex-item",
  gutter:100,
  fitwidth:true,
})

// relax js code
var relax =new Rellax(".rellax", {
  center: true
})