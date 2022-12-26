function caseFieldUpdate(valueId, isIncrease) {
    const inputFieldId = document.getElementById(valueId);
    const inputFieldString = inputFieldId.value;
    let inputField = parseInt(inputFieldString);
    if (isIncrease) {
        inputField = inputField + 1;
        inputFieldId.value = inputField;
        return inputField;
    }
    else if (inputFieldId.value <= 1) {
        return inputFieldId.value;
    }
    else {
        inputField = inputField - 1;
        inputFieldId.value = inputField;
        return inputField;
    }
}

function casePriceUpdate(newCaseNumber) {
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalPlace = document.getElementById("case-total");
    caseTotalPlace.innerText = caseTotalPrice;
}

document.getElementById("btn-case-plus").addEventListener("click", function () {
    const newCaseNumber = caseFieldUpdate("case-number-field", true);
    casePriceUpdate(newCaseNumber);
    calculateSubTotal();
})
document.getElementById("btn-case-minus").addEventListener("click", function () {
    const newCaseNumber = caseFieldUpdate("case-number-field");
    const caseNumberFieldId = document.getElementById("case-number-field");
    if (caseNumberFieldId.value >= 1) {
        casePriceUpdate(newCaseNumber);
    }
    calculateSubTotal();
})