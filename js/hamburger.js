const $hamburgerButton = document.querySelector(".header__hamburger");
const $dropdownMenu = document.querySelector(".header__dropdown");


const displayToggle = () => {
    if ($dropdownMenu.style.opacity === "1") {
        $dropdownMenu.style.opacity = "0";
    } else {
        $dropdownMenu.style.opacity = "1";
    }
}

const animationToggle = () => {
    if(!$dropdownMenu.classList.contains("zoom-in")) {
        $dropdownMenu.classList.add("zoom-in");
        $dropdownMenu.classList.remove("zoom-out");
    } else {
        $dropdownMenu.classList.add("zoom-out");
        $dropdownMenu.classList.remove("zoom-in");
    }
}

function menuToggle() {
    $hamburgerButton.classList.toggle("change");
    displayToggle();
    animationToggle();
}

$hamburgerButton.addEventListener("click", menuToggle);