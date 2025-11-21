const btn_minus = document.querySelector("#btn-design1");
const btn_plus = document.querySelector("#btn-design2");
const counter = document.querySelector("#counter");
const reset = document.querySelector("#reset");

let value = 0;

function updateUI() {
    counter.innerText = value;
}

btn_plus.addEventListener("click", () => {
    value++;
    updateUI();
});

btn_minus.addEventListener("click", () => {
    value--;
    updateUI();
});

reset.addEventListener("click", () => {
    value = 0;      
    updateUI();
});
