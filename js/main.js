document.addEventListener("DOMContentLoaded", () => {
  const image = document.getElementById("section3_img");

  window.addEventListener("scroll", () => {
    const imageRect = image.getBoundingClientRect(); // Get the position of the image relative to the viewport
    const imageInView =
      imageRect.top <= window.innerHeight && imageRect.bottom >= 0; // Check if the image is in the viewport

    if (imageInView) {
      // Only move the image if it's in the viewport
      const currentScrollPosition =
        window.scrollY || document.documentElement.scrollTop;
      image.style.transform =
        currentScrollPosition > lastScrollPosition
          ? "translateX(-50px)"
          : "translateX(50px)";
      lastScrollPosition = currentScrollPosition; // Update the last scroll position
    }
  });

  // Initial scroll position
  let lastScrollPosition = window.scrollY || document.documentElement.scrollTop;
});


