window.onload = (event) => {
  console.log("page is fully loaded");
  var isApple = /iPad|iPhone|iPod|Mac/.test(navigator.userAgent);
  var isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
  var isMacLike = navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i)
    ? true
    : false;
  var isIOS = navigator.platform.match(/(iPhone|iPod|iPad)/i) ? true : false;

  if (isApple || isMac || isMacLike || isIOS) {
    document.getElementById("apple-maps-1").style.display = "block";
    document.getElementById("apple-maps-2").style.display = "block";
  }

  document.body.addEventListener("mousedown", mouseDown);
  // document.body.addEventListener("mousedown", mouseDown, { once: true });
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

function mouseDown() {
  console.log("------ down");
  // document.getElementById("audio").muted = true;
  playPromise = document.getElementById("audio").play();
  if (playPromise !== undefined) {
    playPromise
      .then(function () {
        // Automatic playback started!
        document.getElementById("musicicon").display = true;
        document.body.removeEventListener("mousedown", mouseDown);
      })
      .catch(function (error) {
        // Automatic playback failed.
        // Show a UI element to let the user manually start playback.
      });
  }
  // document.getElementById("audio").muted = false;
}

function playpause() {
  if (document.getElementById("audio").paused) {
    document.getElementById("audio").play();
  } else {
    document.getElementById("audio").pause();
  }
}
