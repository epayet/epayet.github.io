function init() {
	// in pages where giscus is disabled, we have 2 dividers
	// this hides the one from the newsletter component in that scenario
	// this makes it quite dependant of my current setup and could probably be done better
	const giscus = document.querySelector(".giscus");
    if (!giscus) {
    	const hr = document.querySelector(".kit-newsletter-hr");
    	hr.style.display = 'none';
    }
}

// Listen to Quartz navigation events
// 'nav' fires after page navigation (including initial load)
// 'render' fires when DOM content changes in-place (e.g. after decryption, dynamic content)
document.addEventListener("nav", (e) => {
  // console.log("[KitNewsletter] nav");
  init();
});

// 'render' fires when DOM content changes in-place and components need re-initialization
document.addEventListener("render", () => {
  // console.log("[KitNewsletter] Render event - re-initializing");
  init();
});