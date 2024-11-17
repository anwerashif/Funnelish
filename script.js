// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function () {

  // ----- Dynamic Gap Styles Generation -----
  // Create a style element and append it to the document head for dynamic gap styles
  var styleElement = document.createElement('style');
  document.head.appendChild(styleElement);

  // Function to generate dynamic CSS rules for flex gap and responsive reverse
  function generateGapStyles() {
    var styleRules = '';
    var processedGaps = {};
    var gapElements = document.querySelectorAll('[class*="flex_gap_"], [class*="responsive_reverse"]');

    gapElements.forEach(function (el) {
      var classes = el.className.split(' ');
      classes.forEach(function (className) {
        if (className.startsWith('flex_gap_') && !processedGaps[className]) {
          var gapValue = className.split('_').pop();
          if (!isNaN(gapValue)) {
            processedGaps[className] = true;
            styleRules += `.${className} { gap: ${gapValue}px; }\n`;

            // Add the mobile-specific gap style only if gapValue > 15
            if (gapValue > 15) {
              styleRules += `@media (max-width: 768px) { .${className} { gap: 15px; } }\n`;
            }
          }
        }
        // Handle responsive_reverse class within media query and add !important
        if (className === 'responsive_reverse') {
          styleRules += `@media (max-width: 768px) { .responsive_reverse { flex-direction: column-reverse !important; } }\n`;
        }
      });
    });

    styleElement.innerHTML = styleRules;
  }

  // Call the function once to apply initial gap styles
  generateGapStyles();

  // ----- Responsive Image Adjustment -----
  // Function to make fixed-width images responsive
  function makeImagesResponsive() {
    var imgs = document.querySelectorAll('img[width]');
    imgs.forEach(function (img) {
      var fixedWidth = img.getAttribute('width').replace('px', '');
      if (!isNaN(fixedWidth)) {
        img.style.width = '100%';
        img.style.maxWidth = fixedWidth + 'px';
        img.style.height = 'auto';
        img.removeAttribute('width');
        img.removeAttribute('height');
      }
    });
  }

  // Call the function once to apply responsive images' styles on load
  makeImagesResponsive();

  // ----- Combined MutationObserver -----
  // Modified MutationObserver to handle both dynamic gap styles and responsive images
  var observer = new MutationObserver(function (mutationsList) {
    for (var mutation of mutationsList) {
      if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
        generateGapStyles();
        makeImagesResponsive();
      }
    }
  });

  // Start observing the document for changes in the DOM
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

});
