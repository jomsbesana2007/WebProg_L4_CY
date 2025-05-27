function mediaQuery(size) {
    // Checks if the size of the screen is less than or equal 768px
    if (size.matches) {
        // Acquires all the elements within the selected CSS class, which is .video-container
        const elements = document.querySelectorAll('.video-container');
        // Loops through each element within selected .video-container class
        elements.forEach(loopvid);

        function loopvid(element) {
            const vid = element.querySelector('.game-vid');
            const img = element.querySelector('.thumbnail');

            // Sets opacity of img to 0 so that video is displayed
            img.style.opacity = 0;
            vid.play();
            vid.style.opacity = 1;
        }
    // If the condition set in matchMedia is not satisfied, this code block runs the animation for desktop screens
    } else {
        const elements = document.querySelectorAll(".video-container");
        const image = document.querySelectorAll('.thumbnail');

        // Loops through each img element within .thumbnail class
        image.forEach(function (img) {
            img.style.opacity = 1;
        })

        elements.forEach(animation);

        function animation(element) {
            const vid = element.querySelector('.game-vid');

            // Pauses the video and sets opacity to 0 after returning to desktop layout
            vid.pause();
            vid.style.opacity = 0;

            // Plays when mouse hovers over 'video-container' class 
            element.addEventListener('mouseenter', function () {
                vid.play();
                vid.style.opacity = 1;
            });

            // Pauses when mouse exits from 'video-container' class 
            element.addEventListener('mouseleave', function () {
                vid.pause();
                vid.style.opacity = 0;
            });
        };    
    }
}

// matchMedia runs a media query to see whether the user is on a screen less than or equal 768px
var size = window.matchMedia("(max-width: 768px)")

// Function call
mediaQuery(size);

// Monitors for any changes in screen size and calls the function when the screen does change
size.addEventListener("change", function () {
    mediaQuery(size);
});

