// JavaScript to make the event boxes move continuously and stop on hover
document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.event-container');
    const boxes = document.querySelectorAll('.event-box');
    let currentIndex = 0;
    let autoScrollInterval;

    function autoScroll() {
        currentIndex += 1;

        // Scroll the container by the width of one event box
        const boxWidth = boxes[0].offsetWidth + 20; // 20px is the gap between boxes
        container.scrollBy({
            left: boxWidth,
            behavior: 'smooth'
        });

        // If we reach the end, reset back to the first element
        if (currentIndex >= boxes.length) {
            currentIndex = 0;
            container.scrollTo({
                left: 0,
                behavior: 'smooth'
            });
        }
    }

    // Start automatic scrolling
    function startAutoScroll() {
        autoScrollInterval = setInterval(autoScroll, 2000);
    }

    // Stop automatic scrolling
    function stopAutoScroll() {
        clearInterval(autoScrollInterval);
    }

    // Event listeners for stopping and starting scrolling on hover
    container.addEventListener('mouseenter', stopAutoScroll);
    container.addEventListener('mouseleave', startAutoScroll);

    // Start the auto-scrolling on page load
    startAutoScroll();
});
