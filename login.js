const form = document.querySelector("form");
const eField = form.querySelector(".email"),
      eInput = eField.querySelector("input"),
      pField = form.querySelector(".password"),
      pInput = pField.querySelector("input");

form.onsubmit = (e) => {
    e.preventDefault(); // Prevent form from submitting

    // Add shake effect and error class if inputs are empty
    (eInput.value === "") ? eField.classList.add("shake", "error") : checkEmail();
    (pInput.value === "") ? pField.classList.add("shake", "error") : checkPassword();

    // Remove shake effect after 500ms
    setTimeout(() => {
        eField.classList.remove("shake");
        pField.classList.remove("shake");
    }, 500);

    // Real-time validation
    eInput.onkeyup = () => checkEmail();
    pInput.onkeyup = () => checkPassword();

    // Email validation function
    function checkEmail() {
        const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        const errorTxt = eField.querySelector(".error-txt");

        if (!eInput.value.match(pattern)) {
            eField.classList.add("error");
            eField.classList.remove("valid");
            errorTxt.innerText = eInput.value !== "" ? "Enter a valid email address" : "Email can't be blank";
        } else {
            eField.classList.remove("error");
            eField.classList.add("valid");
        }
    }

    // Password validation function
    function checkPassword() {
        if (pInput.value === "") {
            pField.classList.add("error");
            pField.classList.remove("valid");
        } else {
            pField.classList.remove("error");
            pField.classList.add("valid");
        }
    }

    // If both fields are valid, redirect to homepage
    if (!eField.classList.contains("error") && !pField.classList.contains("error")) {
        window.location.href = "homepage.html"; // Redirect to homepage.html
    }
};
