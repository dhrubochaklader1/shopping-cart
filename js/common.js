function getTextElement(elementId) {
    const TotalTextResult = document.getElementById(elementId);
    const TotalTextString = TotalTextResult.innerText;
    const TotalText = parseInt(TotalTextString);
    return TotalText;
}

function setTextElement(elementId, value) {
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculateSubTotal() {
    const phoneTotal = getTextElement("phone-total");
    const caseTotal = getTextElement("case-total");
    const phoneCaseTotal = phoneTotal + caseTotal;
    setTextElement("sub-total", phoneCaseTotal);
    const taxResult = (phoneCaseTotal * 0.1).toFixed(2);
    const taxResultString = parseInt(taxResult);
    setTextElement("tax-amount", taxResultString);
    const total = phoneCaseTotal + taxResultString;
    console.log(total)
    setTextElement("final-total", total)
}