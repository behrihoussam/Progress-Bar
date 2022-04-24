const circles = document.querySelectorAll(".circle");
const outerProgress = document.getElementById("outerProgress");
const innerProgress = document.getElementById("innerProgress");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");

let currentStep = 1;

const progressNext = () => {
    currentStep++;
    if (currentStep > circles.length) {
        currentStep = circles.length;
    }
    changes();
}
const progressPrev = () => {
    currentStep--;
    if (currentStep <= 1) {
        currentStep = 1;
    }
    changes();
}

const changes = () => {
    circles.forEach((circle, index) => {
        if (currentStep > 1) {
            prevButton.disabled = false;
            prevButton.className = "enabled";
        } else if (currentStep <= 1) {
            prevButton.disabled = true;
            prevButton.className = "disabled";
        }
        if (currentStep < 4) {
            nextButton.disabled = false;
            nextButton.className = "enabled";
        } else if (currentStep = 4) {
            nextButton.disabled = true;
            nextButton.className = "disabled";
        }

        let progressBar = 0;
        if (index < currentStep) {
            circle.classList.remove("disabled");
            circle.classList.add("enabled");
            innerProgress.style.width = (currentStep - 1)* 33 + "%";
            console.log(innerProgress.style.width);
        } else {
            circle.classList.add("disabled");
            circle.classList.remove("enabled");
        }
    })
}
nextButton.addEventListener("click", progressNext);
prevButton.addEventListener("click", progressPrev);