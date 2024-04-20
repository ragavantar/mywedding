window.onload = (event) => {
  console.log("page is fully loaded");
  var isApple = /iPad|iPhone|iPod|Mac/.test(navigator.userAgent);
  var isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
  var isMacLike = navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i)
    ? true
    : false;
  var isIOS = navigator.platform.match(/(iPhone|iPod|iPad)/i) ? true : false;

  if (isApple || isMac || isMacLike || isIOS) {
    console.log("======== appleuuu");
  }
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        return;
      }

      // entry.target.classList.remove("animate");
    });
  },
  { threshold: 0.7 }
);

// Get multiple elements instead of a single one using "querySelectorAll"
const squares = document.querySelectorAll(".section");

// Loop over the elements and add each one to the observer
squares.forEach((element) => observer.observe(element));
