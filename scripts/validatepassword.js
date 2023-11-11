function validatePassword() {
    var kp1 = document.querySelector("#pwd");
    var kp2 = document.querySelector("#pwd1");

    if (kp1.value === kp2.value) {
        return true;
    } else {
        alert("Passwords much match.")
        return false;
    }
}