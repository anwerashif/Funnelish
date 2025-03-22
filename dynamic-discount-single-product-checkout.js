<script>
document.addEventListener("DOMContentLoaded", function () {
    /* 
     * Dynamic Discount Code for Single Product Checkout
     * 
     * This script automatically applies a discount code based on the selected product.
     * The discount amount increases incrementally for each product.
     * Example: 
     *   - 1st product selected → DISCOUNT_5
     *   - 2nd product selected → DISCOUNT_10
     *   - 3rd product selected → DISCOUNT_15
     *   - And so on...
     *
     * The discount is applied dynamically when a product is selected and updated if the selection changes.
     */

    function applyDiscount() {
        // Get all product elements
        let products = document.querySelectorAll(".pl-item");
        let selectedIndex = -1;

        // Identify the selected product by its index
        products.forEach((product, index) => {
            if (product.classList.contains("selected")) {
                selectedIndex = index + 1; // Convert to 1-based index
            }
        });

        // If a product is selected, generate and apply the discount code
        if (selectedIndex > 0) {
            let discountValue = selectedIndex * 5; // Example: 5% per selected product
            let discountCode = "DISCOUNT_" + discountValue; // Generates codes like DISCOUNT_5, DISCOUNT_10, etc.

            let discountInput = document.querySelector('.os-discount-box input.__input');
            let applyButton = document.querySelector('.os-discount-box a.__apply');

            if (discountInput && applyButton) {
                discountInput.value = discountCode;
                discountInput.dispatchEvent(new Event("input", { bubbles: true })); // Simulate user input
                setTimeout(() => applyButton.click(), 300); // Simulate clicking the "Apply" button
            }
        }
    }

    // Attach event listener to all radio buttons to detect selection change
    document.querySelectorAll('.pl-radio').forEach((radio) => {
        radio.addEventListener("change", function () {
            // Remove 'selected' class from all products
            document.querySelectorAll(".pl-item").forEach(item => item.classList.remove("selected"));
            
            // Add 'selected' class to the newly selected product
            this.closest(".pl-item").classList.add("selected");

            // Apply discount based on the newly selected product
            applyDiscount();
        });
    });

    // Run discount logic on page load in case a product is pre-selected
    applyDiscount();
});
</script>
