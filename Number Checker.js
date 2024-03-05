let btn = document.querySelector("button");
let output = "";
btn.addEventListener("click", () => {
    let input = parseFloat(document.querySelector("input").value);

    if (isNaN(input)) {
        output = "Invalid input: Please enter a valid number.";
    } else if (input === 0) {
        output = "The number is zero";
    } else if (input > 0 && input % 2 === 0) {
        output = `<span class="first-word">${input}</span> is an even number`;
    } else if (input < 0 && input % 2 === 0) {
        output = `<span class="first-word">${input}</span> is a negative even number`;
    } else if (input < 0 && input % 2 !== 0) {
        output = `<span class="first-word">${input}</span> is a negative odd number`;
    } else {
        output = `<span class="first-word">${input}</span> is an odd number`;
    }

    document.querySelector("p").innerHTML = output;
});
