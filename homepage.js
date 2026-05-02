// Wait for the window to load so the HTML is ready
window.addEventListener('DOMContentLoaded', () => {

    // 1. Select the slider container and the buttons
    const citySlider = document.querySelector('.slider');
    const btnPrev = document.querySelector('.nav.prev');
    const btnNext = document.querySelector('.nav.next');

    // 2. Check if they exist to prevent "null" errors
    if (citySlider && btnPrev && btnNext) {
        
        // Function to get the scroll width dynamically
        const getScrollAmount = () => {
            const firstCard = document.querySelector('.city-card');
            return firstCard ? firstCard.offsetWidth + 20 : 300;
        };

        // 3. Add Click Events
        btnNext.addEventListener('click', () => {
            citySlider.scrollBy({
                left: getScrollAmount(),
                behavior: 'smooth'
            });
        });

        btnPrev.addEventListener('click', () => {
            citySlider.scrollBy({
                left: -getScrollAmount(),
                behavior: 'smooth'
            });
        });

        console.log("✅ PropPunjab City Slider is active!");

    } else {
        // This helps you debug if your HTML classes are named correctly
        console.warn("❌ Slider elements missing! Check if your HTML has class='slider', class='nav prev', and class='nav next'");
    }
});