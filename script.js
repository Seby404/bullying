function submitForm() {
    let bullied = document.querySelector('input[name="bullied"]:checked');
    let where = document.getElementById("where").value;
    let how = document.getElementById("how").value;
    let reaction = document.getElementById("reaction").value;
    let help = document.getElementById("help").value;
    let responseMessage = document.getElementById("responseMessage");

    if (!bullied) {
        responseMessage.style.color = "red";
        responseMessage.innerText = "Please answer if you have been bullied.";
        return;
    }

    let message = "Thank you for sharing your experience. You are not alone, and support is available.";
    responseMessage.style.color = "#28a745";
    responseMessage.innerText = message;

    // Here, you could send the data to a server using fetch() if needed
}
