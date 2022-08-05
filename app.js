
const buy = document.querySelector(".ip1");
const qty = document.querySelector(".ip2");
const sell = document.querySelector(".ip3");
const cal = document.querySelector(".btn-submit");
const display = document.querySelector(".display");
const box = document.querySelector(".box")
const error = document.querySelector(".error")



function is_valid_Input() {
    if (buy.value === "" || qty.value === "" || sell.value === "") {
        setError("Please enter all the values");
    }
    else if (Number(buy.value) <= 0 || Number(qty.value) <= 0 || Number(sell.value) <= 0) {
        setError("Please enter valid values. Values should be greater than Zero");
    }
    else {
        return true;
    }
}

function setError(errorText) {
    error.style.display = "initial";
    error.innerText = errorText;
}

// function resetError()
// {
//     error.innerHTML = "hi";
// }

function resetOutput() {
    box.style.background = "white";
    display.innerText = "";
}



function calculateProfitandloss() {
    let a = Number(buy.value);
    let b = Number(qty.value);
    let c = Number(sell.value);

    let d = a * b;
    let e = b * c;

    let p = (e - d).toFixed(2);
    // console.log(p);

    let pandl = (((e - d) / d) * 100).toFixed(2);
    // console.log(pandl +"%");


    if (e > d) {
        // console.log(p+"dghfh");
        // display.innerHTML = "The Profit is " + p + " and the profit percentage is " + pandl +" %"; Happy_Gelatin.webp

        display.innerHTML = `<div class = "lucky"><div class = "lucky-img"><img src='./Happy_Gelatin.webp' style="width: 50%; "></div><div class:"output-text"  style="margin:auto; margin-right:15%; margin-left:15%; padding : 1rem; font-size: 1.4rem;">The Profit is ${p} and the profit percentage is  ${pandl}%</div></div>`;
        // display.innerHTML = `<div class = "lucky"><div class = "lucky-img"><img src='./emojisky.com-12822245.png' style="width: 60%; "></div><div style="margin:auto; margin-right:20%; font-size: 1.4rem;">The Profit is ${p} and the profit percentage is  ${pandl} %</div></div>`;
        if (pandl >= 50) {
            box.style.background = "#32Cd32";
        }

    }

    else if (e < d) {
        // display.innerHTML = "The Loss is " + p + " and the loss percentage is " + pandl +" %";

        display.innerHTML = `<div class = "lucky"><div class = "lucky-img"><img src='./Sad_Gelatin.webp' style="width: 50%; "></div><div class:"output-text"  style="margin:auto; margin-right:15%; margin-left:15%; padding : 1rem; font-size: 1.4rem;">The Loss is ${p} and the loss percentage is  ${pandl}%</div></div>`;
        if (pandl < 0) {
            box.style.background = "#EF4444";
        }
    }


    // new changes--->

    else {
        if (e = d) {
            display.innerHTML = `<div class = "lucky"><div class = "lucky-img"><img src='./Neutral_Gelatin.webp' style="width: 50%; "></div><div class:"output-text" style="margin:auto; margin-right:15%; margin-left:15%; padding : 1rem; font-size: 1.4rem;">You earned No profit No loss</div></div>`;
            box.style.background = "#FBBF24";
        }
    }

    // <---------


    // return pandl + "%"; ./emojisky.com-6045.png
    // outputbox.innerHTML = `<div class = "lucky"><div class = "lucky-img"><img src='./emojisky.com-12822245.png'></div><div style="margin:auto; margin-right:40%; font-size: 1.4rem;">Yayy! Your birthday is lucky :)</div></div>`;

}

function afterSubmit() {
    // resetError();
    resetOutput();

    if (is_valid_Input) {
        calculateProfitandloss();
    }


}

cal.addEventListener("click", calculateProfitandloss);



buy.addEventListener("click", function () {
    // resetError();
    resetOutput();
});

qty.addEventListener("click", function () {
    // resetError();
    resetOutput();
});

sell.addEventListener("click", function () {
    // resetError();
    resetOutput();
});





