document.addEventListener('DOMContentLoaded', () => {
    const player = new Plyr('#my-video');

    // Add event listener to show controls when the video starts playing
    player.on('play', () => {
        player.elements.container.classList.add('plyr--playing');
    });



});
// window.addEventListener("resize", function () {
//     var headline = document.getElementsByClassName("section4-headline")[0];
//     section6_container = this.document.getElementById("section6-container")

//     if (window.innerWidth < 768) {
//         headline.textContent = "We take care customers our all expert here.";
//         section6_container.classList.remove("container")
//         section6_container.classList.add("container-fluid")

//     }
//     else {
//         headline.textContent = "We are providing best business service.";
//         section6_container.classList.add("container")
//         section6_container.classList.remove("container-fluid")
//     }
// });

// window.addEventListener("resize", function () {
//     var headline = document.getElementsByClassName("section4-headline")[0];
//     var section6_container = document.getElementById("section6-container");

//     if (window.innerWidth < 768) {
//         headline.textContent = "We take care customers our all expert here.";
//         section6_container.classList.remove("container");
//         section6_container.classList.add("container-fluid");
//         localStorage.setItem("headlineContent", headline.textContent);
//     } else {
//         headline.textContent = "We are providing best business service.";
//         section6_container.classList.remove("container-fluid");
//         section6_container.classList.add("container");
//         localStorage.setItem("headlineContent", headline.textContent);
//     }
// });

// Retrieve stored headline content on page load
// window.addEventListener("DOMContentLoaded", function () {
//     var headline = document.getElementsByClassName("section4-headline")[0];
//     var storedContent = localStorage.getItem("headlineContent");

//     if (storedContent) {
//         headline.textContent = storedContent;
//     }
// });

window.addEventListener("resize", function () {
    var headline = document.getElementsByClassName("section4-headline")[0];
    var section6_container = document.getElementById("section6-container");

    if (window.innerWidth < 768) {
        headline.textContent = "We take care customers our all expert here.";
        section6_container.classList.remove("container");
        section6_container.classList.add("container-fluid");
        localStorage.setItem("headlineContent", headline.textContent);
        localStorage.setItem("containerClass", "container-fluid");
    } else {
        headline.textContent = "We are providing best business service.";
        section6_container.classList.remove("container-fluid");
        section6_container.classList.add("container");
        localStorage.setItem("headlineContent", headline.textContent);
        localStorage.setItem("containerClass", "container");
    }
});

// Retrieve stored headline content and container class on page load
window.addEventListener("DOMContentLoaded", function () {
    var headline = document.getElementsByClassName("section4-headline")[0];
    var section6_container = document.getElementById("section6-container");
    var storedContent = localStorage.getItem("headlineContent");
    var storedContainerClass = localStorage.getItem("containerClass");

    if (storedContent) {
        headline.textContent = storedContent;
    }

    if (storedContainerClass) {
        section6_container.classList.remove("container", "container-fluid");
        section6_container.classList.add(storedContainerClass);
    }
});

