(function ($) {
  "use strict";

  // $(".sakura-falling").sakura();

  // $(window).load(function () {
  $(".sakura-falling").sakura("start", {
    // blowAnimations: ["blow-soft-left"],
    className: "sakura", // Class name to use
    fallSpeed: 1, // Factor for petal fall speed
    maxSize: 14, // Maximum petal size
    minSize: 9, // Minimum petal size
    newOn: 600, // Interval after which a new petal is added
    // swayAnimations: [
    //   // Swaying animation names
    //   "sway-0",
    // ],
  });
  // });

  $(".sakura-falling").sakura("stop");
})(jQuery);
