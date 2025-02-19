// Fix safari intentionally ignores autoplay attribute on mobile
document.addEventListener(
    "DOMContentLoaded", 
    function() {
        let video = document.getElementById("myVideo");
        video.play().catch(error => alert("Autoplay blocked:", error));
    }
);
