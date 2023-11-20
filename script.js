const slider = document.querySelector(".slider");
 
let mode = "day";

slider.addEventListener("click", () => {
    if (mode === "day") {
        mode = "night"
        slider.classList.remove("slider_day");
        slider.classList.add("slider_night");
    } else {
        mode = "day"
        slider.classList.remove("slider_night");
        slider.classList.add("slider_day");
    }
})