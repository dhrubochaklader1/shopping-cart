function increaseValue(valueId, isIncrease) {
    const inputFieldId = document.getElementById(valueId);
    const inputFieldString = inputFieldId.value;
    let inputField = parseInt(inputFieldString);
    if (isIncrease) {
        inputField = inputField + 1;
        inputFieldId.value = inputField;
        return inputField;
    }
    else if (inputFieldId.value == 1) {
        return inputFieldId.value;
    }
    else {
        inputField = inputField - 1;
        inputFieldId.value = inputField;
        return inputField;
    }
}

function phonePriceIncrease(newPhoneNumber) {
    const phoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotalPlace = document.getElementById("phone-total");
    phoneTotalPlace.innerText = phoneTotalPrice;
}

document.getElementById("btn-phone-plus").addEventListener("click", function () {
    const newPhoneNumber = increaseValue("phone-number-field", true);
    phonePriceIncrease(newPhoneNumber);
    calculateSubTotal();
})
document.getElementById("btn-phone-minus").addEventListener("click", function () {
    const newPhoneNumber = increaseValue("phone-number-field");
    const phoneNumberFieldId = document.getElementById("phone-number-field");
    if (phoneNumberFieldId.value >= 1) {
        phonePriceIncrease(newPhoneNumber);
    }
    calculateSubTotal();
})