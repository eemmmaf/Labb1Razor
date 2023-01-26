// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

let buttonEl = document.getElementsByClassName("collaps-btn");

for (i = 0; i < buttonEl.length; i++) {
    buttonEl[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";

            //Ändrar aria-expended från true till false(infälld knapp)
            this.setAttribute("aria-expanded", "false");

            //Ändrar pil-ikonerna
            this.firstElementChild.classList.remove("fa-chevron-up");
            this.firstElementChild.classList.add("fa-chevron-down");
        } else {
            content.style.display = "block";

            //Ändrar aria-expanded från false till true(utvidgad knapp)
            this.setAttribute("aria-expanded", "true");

            //Ändrar pilikonerna
            this.firstElementChild.classList.remove("fa-chevron-down");
            this.firstElementChild.classList.add("fa-chevron-up");
        }
    });

}

