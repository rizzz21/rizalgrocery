
    // JavaScript code for image slider
    var sliderImages = document.querySelectorAll(".slider-image");
    var currentImageIndex = 0;

    function showImage(index) {
        // Hide all images
        for (var i = 0; i < sliderImages.length; i++) {
            sliderImages[i].style.transform = "translateX(-100%)";
        }

        // Show the selected image
        sliderImages[index].style.transform = "translateX(0)";
    }

    function previousImage() {
        currentImageIndex--;
        if (currentImageIndex < 0) {
            currentImageIndex = sliderImages.length - 1;
        }
        showImage(currentImageIndex);
    }

    function nextImage() {
        currentImageIndex++;
        if (currentImageIndex >= sliderImages.length) {
            currentImageIndex = 0;
        }
        showImage(currentImageIndex);
    }

    setInterval(nextImage, 4000); // Change image every 2 seconds
