<script>
document.addEventListener("DOMContentLoaded", function () {
    /**
     * Dynamic Discount Code for Multi-Product Selection in Checkout
     *
     * ✅ If all 5 products are selected → Apply "DISCOUNT_25"
     * ✅ If 4 products are selected → Apply "DISCOUNT_20"
     * ✅ If 3 products are selected → Apply "DISCOUNT_15"
     * ✅ If 2 products are selected → Apply "DISCOUNT_10"
     * ✅ If 1 product is selected → Apply "DISCOUNT_5"
     * ✅ If no product is selected → Remove discount code completely
     */

    function applyDiscount() {
        let selectedProducts = document.querySelectorAll('.pl-checkbox:checked').length;
        let discountInput = document.querySelector('.os-discount-box input.__input');
        let applyButton = document.querySelector('.os-discount-box a.__apply');
        let removeDiscount = document.querySelector('.__remove');

        if (!discountInput || !applyButton) return;

        if (selectedProducts === 0) {
            console.log("No product selected, removing discount code...");
            discountInput.value = ""; // Clear input
            discountInput.dispatchEvent(new Event("input", { bubbles: true }));
            
            // Click remove discount button if available
            if (removeDiscount) {
                setTimeout(() => removeDiscount.click(), 300);
            }
            return;
        }

        // Calculate discount based on selected items
        let discountValue = selectedProducts * 5;
        let discountCode = "DISCOUNT_" + discountValue;

        // Apply discount
        discountInput.value = discountCode;
        discountInput.dispatchEvent(new Event("input", { bubbles: true }));
        setTimeout(() => applyButton.click(), 300);

        console.log("Applied Discount Code:", discountCode);
    }

    // Listen for changes on all checkboxes
    document.querySelectorAll('.pl-checkbox').forEach((checkbox) => {
        checkbox.addEventListener("change", applyDiscount);
    });

    applyDiscount(); // Run on page load in case products are pre-selected
});
</script>
