//Get Elements from HTML
let continueButton = document.getElementById("continue-btn");
continueButton.addEventListener("click", ShowHiddenSubsriptionSettings);


let confirmButton = document.getElementById("confirm-btn");
confirmButton.addEventListener("click", ShowHiddenSummary);


let weeklySub = document.getElementById("btn-weekly");
weeklySub.addEventListener("click", ActivateWeeklyButton);
let monthlySub = document.getElementById("btn-monthly");
monthlySub.addEventListener("click", ActivateMonthlyButton);
let quarterSub = document.getElementById("btn-quarter");
quarterSub.addEventListener("click", ActivateQuarterButton);

let subscription_settings = document.getElementById("subscription-settings");
let product_summary = document.getElementById("product-summary");

let displaystyle_subscription_settings = window.getComputedStyle(subscription_settings).getPropertyValue("display");
let displaystyle_product_summary = window.getComputedStyle(subscription_settings).getPropertyValue("display");

let summaryContainer = document.getElementById("summary-container");

let colorSelectButtons = document.getElementsByClassName("button-color-select");


let buttonRed = document.getElementById("btn-red");
buttonRed.addEventListener("click", SelectRedButton);

let buttonPink = document.getElementById("btn-pink");
buttonPink.addEventListener("click", SelectPinkButton);

let buttonViolet = document.getElementById("btn-violet");
buttonViolet.addEventListener("click", SelectVioletButton);

let buttonDarkblue = document.getElementById("btn-darkblue");
buttonDarkblue.addEventListener("click", SelectDarkblueButton);

let buttonSkyblue = document.getElementById("btn-skyblue");
buttonSkyblue.addEventListener("click", SelectSkyblueButton);

let buttonCyan = document.getElementById("btn-cyan");
buttonCyan.addEventListener("click", SelectCyanButton);

let buttonGreen = document.getElementById("btn-green");
buttonGreen.addEventListener("click", SelectGreenButton);

let buttonDarkgreen = document.getElementById("btn-darkgreen");
buttonDarkgreen.addEventListener("click", SelectDarkgreenButton);

let buttonLime = document.getElementById("btn-lime");
buttonLime.addEventListener("click", SelectLimeButton);

let buttonOrange = document.getElementById("btn-orange");
buttonOrange.addEventListener("click", SelectOrangeButton);

let buttonBrown = document.getElementById("btn-brown");
buttonBrown.addEventListener("click", SelectBrownButton);

let buttonBlack = document.getElementById("btn-black");
buttonBlack.addEventListener("click", SelectBlackButton);

//Variable

let penCount = 0;
let priceForSet = "Set Preis";
let valuePriceForSet;

let DeliveryCharge = "Versand";
let valueDeliveryCharge = "kostenlos";

let PriceSummary = "1 Set kostet";
let valuePriceSummary;

// Functions
function SelectRedButton() {
    if (buttonRed.classList.contains("inactive")) {
        penCount += 1;
        buttonRed.classList.remove("inactive");
        buttonRed.className += " active";
    }
    else if (buttonRed.classList.contains("active")) {
        penCount -= 1;
        buttonRed.classList.remove("active");
        buttonRed.className += " inactive";
    }
}

function SelectPinkButton() {
    if (buttonPink.classList.contains("inactive")) {
        penCount += 1;
        buttonPink.classList.remove("inactive");
        buttonPink.className += " active";
    }
    else if (buttonPink.classList.contains("active")) {
        penCount -= 1;
        buttonPink.classList.remove("active");
        buttonPink.className += " inactive";
    }
}

function SelectVioletButton() {
    if (buttonViolet.classList.contains("inactive")) {
        penCount += 1;
        buttonViolet.classList.remove("inactive");
        buttonViolet.className += " active";
    }
    else if (buttonViolet.classList.contains("active")) {
        penCount -= 1;
        buttonViolet.classList.remove("active");
        buttonViolet.className += " inactive";
    }
}

function SelectDarkblueButton() {
    if (buttonDarkblue.classList.contains("inactive")) {
        penCount += 1;
        buttonDarkblue.classList.remove("inactive");
        buttonDarkblue.className += " active";
    }
    else if (buttonRed.classList.contains("active")) {
        penCount -= 1;
        buttonDarkblue.classList.remove("active");
        buttonDarkblue.className += " inactive";
    }
}

function SelectSkyblueButton() {
    if (buttonSkyblue.classList.contains("inactive")) {
        penCount += 1;
        buttonSkyblue.classList.remove("inactive");
        buttonSkyblue.className += " active";
    }
    else if (buttonRed.classList.contains("active")) {
        penCount -= 1;
        buttonSkyblue.classList.remove("active");
        buttonSkyblue.className += " inactive";
    }
}

function SelectCyanButton() {
    if (buttonCyan.classList.contains("inactive")) {
        penCount += 1;
        buttonCyan.classList.remove("inactive");
        buttonCyan.className += " active";
    }
    else if (buttonCyan.classList.contains("active")) {
        penCount -= 1;
        buttonCyan.classList.remove("active");
        buttonCyan.className += " inactive";
    }
}

function SelectGreenButton() {
    if (buttonGreen.classList.contains("inactive")) {
        penCount += 1;
        buttonGreen.classList.remove("inactive");
        buttonGreen.className += " active";
    }
    else if (buttonGreen.classList.contains("active")) {
        penCount -= 1;
        buttonGreen.classList.remove("active");
        buttonGreen.className += " inactive";
    }
}

function SelectDarkgreenButton() {
    if (buttonDarkgreen.classList.contains("inactive")) {
        penCount += 1;
        buttonDarkgreen.classList.remove("inactive");
        buttonDarkgreen.className += " active";
    }
    else if (buttonRed.classList.contains("active")) {
        penCount -= 1;
        buttonDarkgreen.classList.remove("active");
        buttonDarkgreen.className += " inactive";
    }
}

function SelectLimeButton() {
    if (buttonLime.classList.contains("inactive")) {
        penCount += 1;
        buttonLime.classList.remove("inactive");
        buttonLime.className += " active";
    }
    else if (buttonLime.classList.contains("active")) {
        penCount -= 1;
        buttonLime.classList.remove("active");
        buttonLime.className += " inactive";
    }
}

function SelectOrangeButton() {
    if (buttonOrange.classList.contains("inactive")) {
        penCount += 1;
        buttonOrange.classList.remove("inactive");
        buttonOrange.className += " active";
    }
    else if (buttonOrange.classList.contains("active")) {
        penCount -= 1;
        buttonOrange.classList.remove("active");
        buttonOrange.className += " inactive";
    }
}

function SelectBrownButton() {
    if (buttonBrown.classList.contains("inactive")) {
        penCount += 1;
        buttonBrown.classList.remove("inactive");
        buttonBrown.className += " active";
    }
    else if (buttonBrown.classList.contains("active")) {
        penCount -= 1;
        buttonBrown.classList.remove("active");
        buttonBrown.className += " inactive";
    }
}

function SelectBlackButton() {
    if (buttonBlack.classList.contains("inactive")) {
        penCount += 1;
        buttonBlack.classList.remove("inactive");
        buttonBlack.className += " active";
    }
    else if (buttonBlack.classList.contains("active")) {
        penCount -= 1;
        buttonBlack.classList.remove("active");
        buttonBlack.className += " inactive";
    }
}

function ShowHiddenSubsriptionSettings() {
    if (displaystyle_subscription_settings == "none")
        subscription_settings.style.display = "grid";
}

function ShowHiddenSummary() {
    if (displaystyle_product_summary == "none")
        product_summary.style.display = "grid";


    valuePriceForSet = 2 * penCount;
    let firstP = document.createElement("p");
    let secondP = document.createElement("p");
    let thirdP = document.createElement("p");
    let forthP = document.createElement("p");
    let fithP = document.createElement("p");
    let sixthP = document.createElement("p");

    let firstChild = summaryContainer.firstElementChild;

    while (firstChild){
        summaryContainer.removeChild(firstChild)
        firstChild = summaryContainer.lastElementChild;
    }

    firstP.innerText = priceForSet;
    firstP.classList.add("r-1-c-2");
    summaryContainer.appendChild(firstP);
    secondP.innerText = valuePriceForSet + "€";
    secondP.classList.add("r-1-c-3");
    summaryContainer.appendChild(secondP);
    thirdP.innerText = DeliveryCharge;
    thirdP.classList.add("r-2-c-2");
    summaryContainer.appendChild(thirdP);
    forthP.classList.add("r-2-c-3");
    forthP.innerText = valueDeliveryCharge;
    summaryContainer.appendChild(forthP);
    fithP.innerText = PriceSummary;
    fithP.classList.add("r-3-c-2");
    summaryContainer.appendChild(fithP);
    sixthP.innerText = valuePriceForSet + "€";
    sixthP.classList.add("r-3-c-3");
    summaryContainer.appendChild(sixthP);


    /*switch (penCount) {
        case 1:
            firstP.innerText = priceForSet;
            firstP.classList.add("r-1-c-2");
            summayContainer.appendChild(firstP);
            secondP.innerText = valuePriceForSet + "€";
            secondP.classList.add("r-1-c-3");
            summayContainer.appendChild(secondP);
            thirdP.innerText = DeliveryCharge;
            thirdP.classList.add("r-2-c-2");
            summayContainer.appendChild(thirdP);
            forthP.classList.add("r-2-c-3");
            forthP.innerText = valueDeliveryCharge;
            summayContainer.appendChild(forthP);
            fithP.innerText = PriceSummary;
            fithP.classList.add("r-3-c-2");
            summayContainer.appendChild(fithP);
            sixthP.innerText = valuePriceForSet + "€";
            sixthP.classList.add("r-3-c-3");
            summayContainer.appendChild(sixthP);
            break;

        case 2:
            firstP.innerText = priceForSet;
            firstP.classList.add("r-1-c-2");
            summayContainer.appendChild(firstP);
            secondP.innerText = valuePriceForSet + "€";
            secondP.classList.add("r-1-c-3");
            summayContainer.appendChild(secondP);
            thirdP.innerText = DeliveryCharge;
            thirdP.classList.add("r-2-c-2");
            summayContainer.appendChild(thirdP);
            forthP.classList.add("r-2-c-3");
            forthP.innerText = valueDeliveryCharge;
            summayContainer.appendChild(forthP);
            fithP.innerText = PriceSummary;
            fithP.classList.add("r-3-c-2");
            summayContainer.appendChild(fithP);
            sixthP.innerText = valuePriceForSet + "€";
            sixthP.classList.add("r-3-c-3");
            summayContainer.appendChild(sixthP);
            break;


    }*/
}

function ActivateWeeklyButton() {
    weeklySub.style.backgroundColor = "#0CA53A";
    weeklySub.style.color = "white";

    monthlySub.style.backgroundColor = "#F8F8F8";
    monthlySub.style.color = "black";

    quarterSub.style.backgroundColor = "#F8F8F8";
    quarterSub.style.color = "black";

}

function ActivateMonthlyButton() {
    monthlySub.style.backgroundColor = "#0CA53A";
    monthlySub.style.color = "white";

    weeklySub.style.backgroundColor = "#F8F8F8";
    weeklySub.style.color = "black";

    quarterSub.style.backgroundColor = "#F8F8F8";
    quarterSub.style.color = "black";

}

function ActivateQuarterButton() {
    quarterSub.style.backgroundColor = "#0CA53A";
    quarterSub.style.color = "white";

    weeklySub.style.backgroundColor = "#F8F8F8";
    weeklySub.style.color = "black";

    monthlySub.style.backgroundColor = "#F8F8F8";
    monthlySub.style.color = "black";

}



