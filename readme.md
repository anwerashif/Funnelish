# Funnelish Sales Funnel Enhancement Script

This repository contains a JavaScript enhancement script specifically designed to improve the user experience of sales funnels hosted on https://funnelish.com/. It allows for dynamic generation of gap styles within flexible layouts and ensures images within funnels are responsive, providing a seamless and visually consistent experience across different devices.

## Features

- **Dynamic Flex Gap Generation**: Create gap styles dynamically for flex containers on your funnel pages, based on class name conventions.
- **Responsive Image Adjustment**: Converts images with fixed widths to responsive images that fit within the users' viewport without additional CSS.

## How to Use

Implementing this script within your Funnelish sales funnel is simple:

1. Log into your Funnelish dashboard and open the page editor for the funnel where you want to add the script.
2. Click on the three dots icon to expand the editor menu.
3. Select "Custom Codes" from the menu to open a popup dialog with input fields for custom CSS and HTML.
4. In the "Body HTML" field, paste the full script wrapped within `<script>` tags:

    ```html
    <script>
    // Paste the entire JavaScript code here
    </script>
    ```

   Alternatively, if the script is hosted externally, include it using the `<script>` tag's `src` attribute:

    ```html
    <script src="https://yourcdn.com/path/to/funnelish-enhancement-script.js"></script>
    ```

   Replace `https://yourcdn.com/path/to/funnelish-enhancement-script.js` with the actual URL where the script is hosted.

5. Save and publish your changes to make the script take effect on your sales funnel page.

That's it! The script will execute once the page is loaded and automatically manage gap styles and image responsiveness.

## Integration Example

To dynamically create gap styles for flex containers, add class names to your elements with the `flex_gap_[value]` pattern:

```html
<div class="flex_gap_20">
  <!-- Your flex items will automatically have a 20px gap between them -->
</div>
```

To make an image responsive, add a `width` attribute to the `img` tag:

```html
<img src="example-image.jpg" width="600">
<!-- This image will now be responsive -->
```

## Contributions

Your contributions are what make the community strong. If you have ideas for improvement, or notice any issues with the script, feel free to fork this repository, make your updates, and submit a pull request.

## License

The Funnelish Sales Funnel Enhancement Script is open source and is released under the MIT License. For more information, please refer to the LICENSE file in this repository.
```

Please adjust the script source URL and any specific instructions as needed to reflect the actual hosting and implementation details for your script.